'use strict';

import { Middleware, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { MessageCodeError } from '../lib/error/MessageCodeError';

@Middleware()
export class ApiAiJeevesMiddleware implements NestMiddleware {
    resolve () {
        return async function (req: Request, res: Response, next: NextFunction) {
            if (!req.headers.authorization) throw new MessageCodeError('request:unauthorized');

            if (process.env.API_AI_CLIENT_ACCESS_TOKEN_JEEVES === req.headers.authorization) {
                next();
            } else {
                throw new MessageCodeError('request:unauthorized');
            }
        };
    }
}
