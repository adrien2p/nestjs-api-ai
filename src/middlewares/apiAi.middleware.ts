'use strict';

import { Middleware, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as crypto from 'crypto';
import { MessageCodeError } from '../lib/error/MessageCodeError';
import { models } from '../models/index';

@Middleware()
export class ApiAiMiddleware implements NestMiddleware {
    resolve () {
        return async function (req: Request, res: Response, next: NextFunction) {
            if (req.headers.authorization && req.headers.authorization === process.env.API_AI_CLIENT_ACCESS_TOKEN) {
                next();
            } else {
                throw new MessageCodeError('request:unauthorized');
            }
        };
    }
}
