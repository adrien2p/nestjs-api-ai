'use strict';

import { Controller, HttpStatus, Post, Request, Response } from '@nestjs/common';
import { JeevesService } from "./actions/jeeves.service";

@Controller()
export class ApiAiController {
    constructor (private jeevesService: JeevesService) { }

    @Post('jeeves')
    public async jeeves (@Request() req, @Response() res) {
        if (!req.body) throw new Error('Missing body in the request : jeeves.');

        const apiAiUser = req['apiAiUser'];
        this.jeevesService.data = req.body;
        const response = this.jeevesService.run(req.body.result.action.toLowerCase(), apiAiUser);
        return res.status(HttpStatus.OK).json(response);
    }
}
