'use strict';

import { sequelize } from '../models/index';

export async function up () {
    // language=PostgreSQL
    sequelize.query(`
        CREATE TABLE "actions" (
            "id" SERIAL UNIQUE PRIMARY KEY NOT NULL,
            "agentName" VARCHAR(30) NOT NULL,
            "actionName" VARCHAR(30) NOT NULL,
            "requestId" VARCHAR(100) UNIQUE NOT NULL,
            "data" JSONB NOT NULL,
            "createdAt" TIMESTAMP NOT NULL,
            "updatedAt" TIMESTAMP NOT NULL,
            "deletedAt" TIMESTAMP
        );
    `);

    console.log('*Table users created!*');
}

export async function down () {
    // language=PostgreSQL
    sequelize.query(`DROP TABLE actions`);
}
