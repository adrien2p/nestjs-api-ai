'use strict';
import { IFirebaseProvider } from "./IFirebaseProvider";

export interface IFirebaseRepository {
    providersInstance: {[agentName: string]: IFirebaseProvider};
    getFirebaseProviderRelatedTo(name: string): IFirebaseProvider;
}