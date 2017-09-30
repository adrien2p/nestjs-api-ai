'use strict';

import {
    Table, Column, Model, DataType,
    CreatedAt, UpdatedAt, DeletedAt, HasMany
} from 'sequelize-typescript';
import { IDefineOptions } from 'sequelize-typescript/lib/interfaces/IDefineOptions';
import { Action } from './Actions';

const tableOptions: IDefineOptions = { timestamp: true, tableName: 'apiAiUsers' } as IDefineOptions;

@Table(tableOptions)
export class ApiAiUser extends Model<ApiAiUser> {
    @Column({
        type: DataType.NUMERIC,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.CHAR(30),
        allowNull: false
    })
    firstName: string;

    @Column({
        type: DataType.CHAR(30),
        allowNull: false
    })
    lastName: string;

    @Column({
        type: DataType.CHAR(100),
        allowNull: false,
        validate: {
            isEmail: true,
            unique: "L'adresse e-mail fourni existe déjà, veuillez en choisir une autre."
        }
    })
    email: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false
    })
    accessToken: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false
    })
    googleUserId: string;

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;

    @DeletedAt
    deletedAt: Date;

    @HasMany(() => Action, {
        as: 'actions',
        foreignKey: 'apiAiUserId'
    })
    actions: Array<Action>;
}
