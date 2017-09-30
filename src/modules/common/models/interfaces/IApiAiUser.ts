'use strict';

import { Instance } from 'sequelize';

export interface IApiAiUser {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    accessToken: string;
    googleUserId: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface IApiAiUserInstance extends Instance<IApiAiUser> {
    dataValues: IApiAiUser;
}
