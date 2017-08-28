'use strict';

import { Module } from '@nestjs/common';
import { MiddlewaresConsumer } from '@nestjs/common/interfaces/middlewares';
import { AuthMiddleware } from '../../middlewares/auth.middleware';
import { LocalTunnelService } from '../localTunnel/localTunnel.service';
import { LocalTunnelController } from '../localTunnel/localTunnel.controller';

@Module({
    controllers: [LocalTunnelController],
    components: [LocalTunnelService],
    modules: [],
    exports: []
})
export class LocalTunnelModule {
    configure (consumer: MiddlewaresConsumer) {
        consumer.apply(AuthMiddleware).forRoutes(LocalTunnelController);
    }
}
