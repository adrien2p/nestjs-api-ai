'use strict';

import * as SequelizeStatic from 'sequelize';
import { DataTypes, Sequelize } from 'sequelize';
import { IApiAiUser, IApiAiUserInstance } from './interfaces/IApiAiUser';

export default function User (sequelize: Sequelize, dataTypes: DataTypes): SequelizeStatic.Model<IApiAiUserInstance, IApiAiUser> {
    let ApiAiUser = sequelize.define<IApiAiUserInstance, IApiAiUser>('ApiAiUser', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        firstName: {
            type: dataTypes.CHAR(30),
            allowNull: false
        },
        lastName: {
            type: dataTypes.CHAR(30),
            allowNull: false
        },
        email: {
            type: dataTypes.CHAR(100),
            allowNull: false,
            unique: "L'adresse e-mail fourni existe déjà, veuillez en choisir une autre."
        },
        accessToken: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        googleUserId: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        createdAt: {
            type: dataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: dataTypes.DATE,
            allowNull: true
        },
        deletedAt: {
            type: dataTypes.DATE,
            allowNull: true
        }
    }, {
        tableName: 'apiAiUsers',
        paranoid: true,
        timestamps: true,
        scopes: {},
        indexes: [],
        classMethods: {},
        instanceMethods: {},
        hooks: {}
    });

    return ApiAiUser;
}
