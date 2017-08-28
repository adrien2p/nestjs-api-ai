'use strict';

import { IResponse } from './IResponse';
import { IApiAiUserInstance } from '../../../models/interfaces/IApiAiUser';
import { IAbstractAction } from './IAbstractAction';

export interface IJeevesService extends IAbstractAction {
    /**
     * @description: Get an action name and process to return the right response.
     * @param {string} action
     * @return {IResponse}
     */
    run (action: string, apiAiUser: IApiAiUserInstance): IResponse;
}
