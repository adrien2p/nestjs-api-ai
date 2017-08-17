'use strict';

import { Controller, HttpStatus, Post } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller()
export class ApiAiController {
    @Post('apiAi')
    public async apiAi (req: Request, res: Response) {
        const response = {
            source: req.body.result.source,
            resolvedQuery: req.body.result.resolvedQuery,
            action: req.body.result.action,
            actionIncomplete: req.body.result.actionIncomplete,
            parameters: req.body.result.parameters,
            context: req.body.result.contexts
        };
        console.log('response: ', response);
    }
}
