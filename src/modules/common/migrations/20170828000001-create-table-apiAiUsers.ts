'use strict';

import { sequelize } from '../index';

export async function up () {
    // language=PostgreSQL
    sequelize.query(`
        CREATE TABLE "apiAiUsers" (
            "id" SERIAL UNIQUE PRIMARY KEY NOT NULL,
            "firstName" VARCHAR(30) NOT NULL,
            "lastName" VARCHAR(30) NOT NULL,
            "email" VARCHAR(100) UNIQUE NOT NULL,
            "accessToken" TEXT UNIQUE NOT NULL,
            "googleUserId" TEXT UNIQUE NOT NULL,
            "createdAt" TIMESTAMP NOT NULL,
            "updatedAt" TIMESTAMP NOT NULL,
            "deletedAt" TIMESTAMP
        );
    `);

    console.log('*Table apiAiUsers created!*');
}

export async function down () {
    // language=PostgreSQL
    sequelize.query(`DROP TABLE "apiAiUsers"`);
}
