'use strict';

import { IResponse } from './IResponse';
import { IAbstractAction } from './IAbstractAction';
import { ApiAiUser } from '../../common/models/ApiAiUser';

export interface IJeevesService extends IAbstractAction {
    /**
     * @description: Get an action name and process to return the right response.
     * @param {string} action
     * @return {IResponse}
     */
    run (action: string, apiAiUser: ApiAiUser): Promise<IResponse>;
}
