'use strict';

import { Middleware, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as https from 'https';
import { sequelize, ApiAiUser } from '../index';

@Middleware()
export class ApiAiJeevesCheckOrCreateUserMiddleware implements NestMiddleware {
    resolve () {
        return async function (req: Request, res: Response, next: NextFunction) {
            if (!req.body || (req.body && !req.body.originalRequest)) next();

            const data = req.body;
            const accessToken = data.originalRequest.data.user.accessToken;
            const googleUserId = data.originalRequest.data.user.userId;
            const googleApiUrl = 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=';

            let apiAiUser = await ApiAiUser.findOne<ApiAiUser>({ where: { googleUserId: googleUserId }});
            await sequelize.transaction(async t => {
                if (!apiAiUser) {
                    /* Get user info from google to create a new apiAiUser locally. */
                    const userInfo: any = await new Promise((resolve, reject) => {
                        https.get(googleApiUrl + accessToken, res => {
                            let streamData = '';
                            res.on('data', (d) => streamData += d);
                            res.on('error', (err) => reject(err));
                            res.on('end', () => resolve(JSON.parse(streamData)));
                        });
                    });

                    /* Create the new user. */
                    apiAiUser = await ApiAiUser.create<ApiAiUser>({
                        firstName: userInfo.given_name,
                        lastName: userInfo.family_name,
                        email: userInfo.email,
                        accessToken: accessToken,
                        googleUserId: googleUserId
                    }, {
                        returning: true,
                        transaction: t
                    });
                } else {
                    await apiAiUser.update({
                        accessToken: accessToken
                    }, { transaction: t });
                    await apiAiUser.reload();
                }
            });

            /* Put the user in the request to get it easily in the next action. */
            req['apiAiUser'] = apiAiUser;
            next();
        };
    }
}
