'use strict';

import { Module } from '@nestjs/common';
import { MiddlewaresConsumer } from "@nestjs/common/interfaces/middlewares";
import { ApiAiMiddleware } from "../../middlewares/apiAi.middleware";
import { ApiAiController } from "./apiAi.controller";
import { CinemaActionsService } from "./agents/cinema/cinemaActions.service";
import { SharedModule } from "../shared/shared.module";

@Module({
    controllers: [ApiAiController],
    components: [CinemaActionsService],
    modules: [SharedModule],
    exports: []
})
export class ApiAiModule {
    configure(consumer: MiddlewaresConsumer) {
        consumer.apply(ApiAiMiddleware).forRoutes(ApiAiController);
    }
}
