'use strict';

import { Component } from '@nestjs/common';
import * as localTunnel from 'localtunnel';
import { config } from '../common/index';
import { ILocalTunnelService } from './interfaces/ILocalTunnelService';

@Component()
export class LocalTunnelService implements ILocalTunnelService {
    private _localTunnel: any;
    private _url: string;

    constructor () {
        this._localTunnel = null;
        this._url = '';
    }

    get url (): string {
        return this._url;
    }

    start (): Promise<any> {
        return new Promise((resolve, reject) => {
            if (!this._url) {
                localTunnel(config.localTunnelPort, (err, tunnel) => {
                    if (err) throw new Error(err);

                    this._localTunnel = tunnel;
                    this._url = tunnel.url;
                    console.log(`local tunnel started on ${this._url}`);
                    return resolve(`local tunnel started on ${this._url}`);
                });
            } else {
                return reject(`local tunnel already started on ${this._url}`);
            }
        });
    }

    close (): void {
        this._url = '';
        this._localTunnel && this._localTunnel.close();
    }
}
