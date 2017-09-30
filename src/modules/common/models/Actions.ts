'use strict';

import {
    Table, Column, Model, DataType,
    CreatedAt, UpdatedAt, DeletedAt, BeforeValidate, ForeignKey
} from 'sequelize-typescript';
import { IDefineOptions } from 'sequelize-typescript/lib/interfaces/IDefineOptions';
import { MessageCodeError } from '../lib/error/MessageCodeError';
import { ApiAiUser } from './ApiAiUser';

const tableOptions: IDefineOptions = { timestamp: true, tableName: 'actions' } as IDefineOptions;

@Table(tableOptions)
export class Action extends Model<Action> {
    @Column({
        type: DataType.NUMERIC,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.NUMERIC,
        allowNull: false
    })
    @ForeignKey(() => ApiAiUser)
    apiAiUserId: number;

    @Column({
        type: DataType.TEXT,
        allowNull: false
    })
    agentName: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false
    })
    actionName: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    requestId: number;

    @Column({
        type: DataType.JSONB,
        allowNull: false
    })
    data: any;

    @Column({
        type: DataType.JSONB,
        allowNull: false
    })
    response: any;

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;

    @DeletedAt
    deletedAt: Date;

    @BeforeValidate
    static validateData (action: Action, options: any) {
        if (!options.transaction) throw new Error('Missing transaction.');
        if (!action.agentName) throw new MessageCodeError('action:missingAgentName');
        if (!action.actionName) throw new MessageCodeError('action:missingActionName');
        if (!action.requestId) throw new MessageCodeError('action:missingRequestId');
        if (!action.apiAiUserId) throw new MessageCodeError('action:missingApiAiUserId');
        if (!action.data) throw new MessageCodeError('action:missingData');
    }
}
