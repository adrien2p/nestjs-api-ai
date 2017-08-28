'use strict';

import * as SequelizeStatic from 'sequelize';
import { DataTypes, Sequelize } from 'sequelize';
import { MessageCodeError } from '../lib/error/MessageCodeError';
import { IAction, IActionInstance } from "./interfaces/IAction";

export default function Action (sequelize: Sequelize, dataTypes: DataTypes): SequelizeStatic.Model<IActionInstance, IAction> {
    let Action = sequelize.define<IActionInstance, IAction>('Action', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        agentName: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        actionName: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        requestId: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        data: {
            type: dataTypes.JSONB,
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
        tableName: 'actions',
        paranoid: true,
        timestamps: true,
        scopes: {},
        indexes: [],
        classMethods: {},
        instanceMethods: {},
        hooks: {
            beforeValidate (action: IActionInstance, options: any): void {
                if (!options.transaction) throw new Error('Missing transaction.');
                if (!action.getDataValue('agentName')) throw new MessageCodeError('action:missingAgentName');
                if (!action.getDataValue('actionName')) throw new MessageCodeError('action:missingActionName');
                if (!action.getDataValue('requestId')) throw new MessageCodeError('action:missingRequestId');
                if (!action.getDataValue('data')) throw new MessageCodeError('action:missingData');
            }
        }
    });

    return Action;
}
