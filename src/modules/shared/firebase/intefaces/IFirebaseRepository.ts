'use strict';
import { IFirebaseProvider } from "./IFirebaseProvider";

export interface IFirebaseRepository {
    providers: {[agentName: string]: IFirebaseProvider};
    getFirebaseProviderRelatedTo(name: string): IFirebaseProvider;
}