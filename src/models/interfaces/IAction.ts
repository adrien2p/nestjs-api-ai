'use strict';

import { Instance } from 'sequelize';

export interface IAction {
    id?: number;
    apiAiUserId: number;
    agentName: string;
    actionName: string;
    requestId: string;
    data: any;
    response: any,
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface IActionInstance extends Instance<IAction> {
    dataValues: IAction;
}
