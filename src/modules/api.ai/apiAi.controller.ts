'use strict';

import { Controller, HttpStatus, Post, Request, Response } from '@nestjs/common';
import { InterceptorService } from './actions/jeeves/interceptor.service';

@Controller()
export class ApiAiController {
    constructor (private interceptorService: InterceptorService) { }

    @Post('jeeves')
    public async jeeves (@Request() req, @Response() res) {
        if (!req.body) throw new Error('Missing body in the request : jeeves.');

        const apiAiUser = req['apiAiUser'];
        const response = this.interceptorService.parse(req.body, apiAiUser);
        return res.status(HttpStatus.OK).json(response);
    }
}
