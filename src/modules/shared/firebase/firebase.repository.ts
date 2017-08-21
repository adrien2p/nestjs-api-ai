'use strict';

import { Component } from "@nestjs/common";
import { IFirebaseProvider } from "./intefaces/IFirebaseProvider";
import { IFirebaseRepository } from "./intefaces/IFirebaseRepository";
import { CinemaFirebaseProvider } from "./providers/cinemaFirebase.provider";

@Component()
export class FirebaseRepository implements IFirebaseRepository {
    public providers: { [agentName: string]: IFirebaseProvider }  = {};

    constructor() { }

    public getFirebaseProviderRelatedTo(agentName: string) {
        if (!agentName) throw new Error('missing parameter agentName.');

        this.providers[agentName] = this.providers[agentName] || new CinemaFirebaseProvider();
        if (!this.providers[agentName].isInitialized) this.providers[agentName].init();

        return this.providers[agentName];
    }
}