'use strict';

import { Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { Request, Response } from 'express';
import { LocalTunnelService } from "./components/localTunnel.service";

@Controller()
export class SharedController {
    constructor(private localTunnelService: LocalTunnelService) { }

    @Get('localTunnelStart')
    public async localTunnelStart (req: Request, res: Response) {
        await this.localTunnelService.start();
        console.log()
        return res.status(HttpStatus.OK).send(`Local tunnel started on ${this.localTunnelService.url}.`);
    }

    @Get('localTunnelStop')
    public async localTunnelStop (req: Request, res: Response) {
        this.localTunnelService.close();
        return res.status(HttpStatus.OK).send('Local tunnel stopped.');
    }
}
