'use strict';

import { Controller, HttpStatus, Post } from '@nestjs/common';
import { Request, Response } from 'express';
import { InterceptorService } from "./actions/jeeves/interceptor.service";

@Controller()
export class ApiAiController {
    constructor(private interceptorService: InterceptorService) { }

    @Post('jeeves')
    public async jeeves (req: Request, res: Response) {
        if (!req.body) throw new Error('Missing body in the request : jeeves.');

        const apiAiUser = req['apiAiUser'];
        const response = this.interceptorService.parse(req.body, apiAiUser);
        return res.status(HttpStatus.OK).json(response);
    }
}
