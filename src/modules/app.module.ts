'use strict';

import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from "./shared/shared.module";
import { ApiAiModule } from "./api.ai/apiAi.module";

@Module({
    controllers: [],
    components: [],
    modules: [
        SharedModule,
        UsersModule,
        AuthModule,
        ApiAiModule
    ],
    exports: []
})
export class ApplicationModule { }
