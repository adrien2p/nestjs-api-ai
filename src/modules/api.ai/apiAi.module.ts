'use strict';

import { Module } from '@nestjs/common';
import { MiddlewaresConsumer } from "@nestjs/common/interfaces/middlewares";
import { AuthMiddleware } from "../../middlewares/auth.middleware";
import { ApiAiController } from "./apiAi.controller";

@Module({
    controllers: [ApiAiController],
    components: [],
    modules: [],
    exports: []
})
export class ApiAiModule {
    configure(consumer: MiddlewaresConsumer) {
        consumer.apply(AuthMiddleware).forRoutes(ApiAiController);
    }
}
