'use strict';

import { Module } from '@nestjs/common';
import { FirebaseRepository } from "./firebase/firebase.repository";

@Module({
    controllers: [],
    components: [FirebaseRepository],
    modules: [],
    exports: [FirebaseRepository]
})
export class SharedModule { }
