'use strict';

import { Module, RequestMethod } from '@nestjs/common';
import { MiddlewaresConsumer } from '@nestjs/common/interfaces/middlewares';
import {
    ApiAiJeevesMiddleware,
    ApiAiJeevesCheckOrCreateUserMiddleware
} from '../common/index';
import { ApiAiController } from './apiAi.controller';
import { InterceptorService } from './actions/jeeves/interceptor.service';
import { JeevesService } from './actions/jeeves/jeeves.service';

@Module({
    controllers: [ApiAiController],
    components: [
        InterceptorService,
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
