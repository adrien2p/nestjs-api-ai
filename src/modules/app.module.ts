'use strict';

import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { LocalTunnelModule } from "./localTunnel/localTunnel.module";
import { ApiAiModule } from "./api.ai/apiAi.module";

@Module({
    controllers: [],
    components: [],
    modules: [
        UsersModule,
        AuthModule,
        LocalTunnelModule,
        ApiAiModule
    ],
    exports: []
})
export class ApplicationModule { }
