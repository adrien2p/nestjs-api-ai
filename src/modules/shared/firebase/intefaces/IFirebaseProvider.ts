'use strict';

export interface IFirebaseProvider {
    isInitialized: boolean;
    app: admin.app.App;
    database: admin.database.Database;

    /**
     * @description: Initialize app and database.
     */
    init(): void
}