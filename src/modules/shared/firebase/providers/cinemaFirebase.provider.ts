'use strict';

import * as admin from "firebase-admin";
import { cert } from '../../../../config/firebase';
import { IFirebaseProvider } from "../intefaces/IFirebaseProvider";

export class CinemaFirebaseProvider implements IFirebaseProvider {
    public isInitialized: boolean;
    public app: admin.app.App;
    public database: admin.database.Database;
    private readonly cinemaAgentCert: string = cert.cinemaAgentCertFB;

    constructor() { }

    public init(): this {
        if (admin.apps.length === 0) {
            this.app = admin.initializeApp({
                credential: admin.credential.cert(JSON.parse(this.cinemaAgentCert)),
                databaseURL: process.env.FIREBASE_CINEMA_DATABASE_URL || ''
            }, 'cinemaFirebase');
        } else {
            this.app = admin.app('cinemaFirebase');
        }
        this.isInitialized = true;
        this.database = this.app.database();

        return this;
    }
}
