'use strict';

import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { LocalTunnelModule } from "./localTunnel/localTunnel.module";
import { SharedModule } from "./shared/shared.module";
import { ApiAiModule } from "./api.ai/apiAi.module";

@Module({
    controllers: [],
    components: [],
    modules: [
        SharedModule,
        UsersModule,
        AuthModule,
        LocalTunnelModule,
        ApiAiModule
    ],
    exports: []
})
export class ApplicationModule { }
