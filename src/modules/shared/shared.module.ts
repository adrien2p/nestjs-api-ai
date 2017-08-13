'use strict';

import { Module } from '@nestjs/common';
import { AuthMiddleware } from "../../middlewares/auth.middleware";
import { MiddlewaresConsumer } from "@nestjs/common/interfaces/middlewares";
import { LocalTunnelService } from "./components/localTunnel.service";
import { SharedController } from "./shared.controller";

@Module({
    controllers: [SharedController],
    components: [LocalTunnelService],
    modules: [],
    exports: [LocalTunnelService]
})
export class SharedModule {
    configure(consumer: MiddlewaresConsumer) {
        consumer.apply(AuthMiddleware).forRoutes(SharedController);
    }
}
