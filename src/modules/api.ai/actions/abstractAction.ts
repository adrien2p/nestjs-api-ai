'use strict';

import { IAbstractAction } from '../interfaces/IAbstractAction';
import { models, sequelize } from "../../../models/index";
import { IApiAiUserInstance } from "../../../models/interfaces/IApiAiUser";
import { IAction } from "../../../models/interfaces/IAction";

export abstract class AbstractAction implements IAbstractAction{
    public data: any;
    protected agentName: string;

    constructor () {}

    /**
     * @description: Allow to save some information and the request data.
     * @param {string} agentName
     * @param {IApiAiUserInstance} apiAiUser
     * @return {Promise<any>}
     */
    protected async save (agentName: string, response: any, apiAiUser: IApiAiUserInstance): Promise<any> {
        const obj: IAction = {
            apiAiUserId: apiAiUser.getDataValue('id'),
            agentName: agentName,
            actionName: this.data.result.action,
            requestId: this.data.id,
            data: this.data,
            response: response
        };

        await sequelize.transaction(t => models.Action.create(obj, { transaction: t }));
    }

    /**
     * @description: Allow to run the debug mode and show trace in the console.
     */
    protected debug () {
        console.log('====================================================================');
        console.log('=                          DEBUG MODE                              =');
        console.log('====================================================================');
        console.log('=                          REQUEST                                 =');
        console.log('====================================================================');
        console.log(this.data);
        console.log('====================================================================');
        console.log('=                          RESULT                                  =');
        console.log('====================================================================');
        console.log(this.data.result);
        console.log('====================================================================');
        console.log('=                          ORIGINAL REQUEST                        =');
        console.log('====================================================================');
        console.log(this.data.originalRequest);
        console.log('====================================================================');
        console.log('=                          ORIGINAL REQUEST DATA                   =');
        console.log('====================================================================');
        console.log(this.data.originalRequest.data);
        console.log('====================================================================');
        console.log('=                          ORIGINAL REQUEST DATA USER              =');
        console.log('====================================================================');
        console.log(this.data.originalRequest.data.user);
    }
}
