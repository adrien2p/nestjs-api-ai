'use strict';

import { Controller, Get, HttpStatus, Request, Response } from '@nestjs/common';
import { LocalTunnelService } from './localTunnel.service';

@Controller()
export class LocalTunnelController {
    constructor (private localTunnelService: LocalTunnelService) { }

    @Get('localTunnelStart')
    public async localTunnelStart (@Request() req, @Response() res) {
        await this.localTunnelService.start();
        return res.status(HttpStatus.OK).send(`Local tunnel started on ${this.localTunnelService.url}.`);
    }

    @Get('localTunnelStop')
    public async localTunnelStop (@Request() req, @Response() res) {
        this.localTunnelService.close();
        return res.status(HttpStatus.OK).send('Local tunnel stopped.');
    }
}
