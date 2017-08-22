'use strict';

import { FirebaseRepository } from "../../shared/firebase/firebase.repository";

export abstract class AbstractAction {
    private _firebase: admin.app.App;
    private _db: admin.database.Database;

    constructor(agentName: string, firebaseRepository: FirebaseRepository) {
        this._firebase = firebaseRepository.getFirebaseProviderRelatedTo(agentName).app;
        this._db = this._firebase.database();
    }

    protected async saveData(refTarget: string, data: any): Promise<any> {
        const ref = this._db.ref(refTarget);
        await ref.set(data);
    }
}