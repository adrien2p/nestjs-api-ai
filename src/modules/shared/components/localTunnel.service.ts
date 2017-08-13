'use strict';

import { Component } from "@nestjs/common";
const localTunnel = require('localtunnel');

@Component()
export class LocalTunnelService {
    private _localTunnel: any;
    private _url: string;

    constructor() {
        this._localTunnel = null;
        this._url = '';
    }

    get url() {
        return this._url;
    }

    start() {
        if (!this._url) {
            localTunnel(3000, (err, tunnel) => {
                if (err) throw new Error(err);

                this._localTunnel = tunnel;
                this._url = tunnel.url;
                console.log('local tunnel started.', this._url);
            });
        }
    }

    close() {
        this._url = '';
        this._localTunnel.close && this._localTunnel.close();
    }
}