'use strict';

import { IFirebase } from "./interfaces/IFirebase";

const cinemaFirebaseConfig: IFirebase = {
    apiKey: process.env.FIREBASE_CINEMA_API_KEY || '',
    authDomain: process.env.FIREBASE_CINEMA_AUTH_DOMAIN || '',
    databaseURL: process.env.FIREBASE_CINEMA_DATABASE_URL || '',
    projectId: process.env.FIREBASE_CINEMA_PROJECT_ID || '',
    storageBucket: process.env.FIREBASE_CINEMA_STORAGE_BUCKET || '',
    messagingSenderId: process.env.FIREBASE_CINEMA_MESSAGING_SENDER_ID || ''
};

export const cert = {
    cinemaAgentCertFB: process.env.FIREBASE_CINEMA_CERT || ''
};


