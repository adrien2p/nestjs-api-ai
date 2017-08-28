'use strict';

export interface ILocalTunnelService {
    readonly url: string;

    /**
     * @description: Allow to start a new local tunnel and set the url.
     * @return {Promise<any>}
     */
    start (): Promise<any>;

    /**
     * @description: Allow to close an existing local tunnel.
     */
    close (): void;
}
