'use strict';

import { Module, RequestMethod } from '@nestjs/common';
import { MiddlewaresConsumer } from '@nestjs/common/interfaces/middlewares';
import {
    ApiAiJeevesMiddleware,
    ApiAiJeevesCheckOrCreateUserMiddleware
} from '../common/index';
import { ApiAiController } from './apiAi.controller';
import { JeevesService } from './actions/jeeves.service';

@Module({
    controllers: [ApiAiController],
    components: [
        JeevesService
    ],
    modules: [],
    exports: []
})
export class ApiAiModule {
    configure (consumer: MiddlewaresConsumer) {
        consumer.apply([
            ApiAiJeevesMiddleware,
            ApiAiJeevesCheckOrCreateUserMiddleware
        ]).forRoutes({
            path: 'jeeves', method: RequestMethod.ALL
        });
    }
}
