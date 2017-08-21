'use strict';

import { Controller, HttpStatus, Post } from '@nestjs/common';
import { Request, Response } from 'express';
import { CinemaActionsService } from "./agents/cinema/cinemaActions.service";

@Controller()
export class ApiAiController {
    constructor(private cinemaActionsService: CinemaActionsService) { }

    @Post('apiAiCinema')
    public async apiAiCinema (req: Request, res: Response) {
        const response = await this.cinemaActionsService.run(req.body);
        return res.status(HttpStatus.OK).send(response);
    }
}
