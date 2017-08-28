'use strict';

import { Instance } from 'sequelize';

export interface IAction {
    id: number;
    agentName: string;
    actionName: string;
    requestId: string;
    data: any;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}

export interface IActionInstance extends Instance<IAction> {
    dataValues: IAction;
}
