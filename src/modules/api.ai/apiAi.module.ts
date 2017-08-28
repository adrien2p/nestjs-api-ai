'use strict';

import { Module, RequestMethod } from '@nestjs/common';
import { MiddlewaresConsumer } from "@nestjs/common/interfaces/middlewares";
import { ApiAiJeevesMiddleware } from "../../middlewares/apiAi.jeeves.middleware";
import { ApiAiJeevesCheckOrCreateUserMiddleware } from "../../middlewares/apiAi.jeeves.checkOrCreateUser.middleware";
import { ApiAiController } from "./apiAi.controller";
import { InterceptorService } from "./actions/jeeves/interceptor.service";
import { TheaterActionsService } from "./actions/jeeves/theater/theaterActions.service";

@Module({
    controllers: [ApiAiController],
    components: [
        InterceptorService,
        TheaterActionsService
    ],
    modules: [],
    exports: []
})
export class ApiAiModule {
    configure(consumer: MiddlewaresConsumer) {
        consumer.apply([
            ApiAiJeevesMiddleware,
            ApiAiJeevesCheckOrCreateUserMiddleware
        ]).forRoutes({
            path: 'jeeves', method: RequestMethod.ALL
        });
    }
}
