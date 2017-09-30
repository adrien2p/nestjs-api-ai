'use strict';

import { IResponse } from './IResponse';
import { ApiAiUser } from '../../common/models/ApiAiUser';

export interface IInterceptorService {
    /**
     * @description: Parse data to redirect to the right action and return the response from the action.
     * @param data
     * @param {IApiAiUser} apiAiUser
     * @return {IResponse}
     */
    parse (data: any, apiAiUser: ApiAiUser): IResponse;
}
