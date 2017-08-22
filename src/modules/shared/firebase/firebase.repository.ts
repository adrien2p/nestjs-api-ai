'use strict';

import { Component } from "@nestjs/common";
import { IFirebaseProvider } from "./intefaces/IFirebaseProvider";
import { IFirebaseRepository } from "./intefaces/IFirebaseRepository";
import { CinemaFirebaseProvider } from "./providers/cinemaFirebase.provider";

@Component()
export class FirebaseRepository implements IFirebaseRepository {
    private providersMap = {
        cinema: CinemaFirebaseProvider
    };
    public providersInstance: { [agentName: string]: IFirebaseProvider }  = {};

    constructor() { }

    public getFirebaseProviderRelatedTo(agentName: string) {
        if (!agentName) throw new Error('missing parameter agentName.');

        this.providersInstance[agentName] = this.providersInstance[agentName] || new this.providersMap[agentName]();
        if (!this.providersInstance[agentName].isInitialized) this.providersInstance[agentName].init();

        return this.providersInstance[agentName];
    }
}