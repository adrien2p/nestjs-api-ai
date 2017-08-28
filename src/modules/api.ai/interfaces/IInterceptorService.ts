'use strict';

import { IResponse } from "./IResponse";
import { IApiAiUserInstance } from "../../../models/interfaces/IApiAiUser";

export interface IInterceptorService {
    /**
     * @description: Parse data to redirect to the right action and return the response from the action.
     * @param data
     * @param {IApiAiUser} apiAiUser
     * @return {IResponse}
     */
    parse(data: any, apiAiUser: IApiAiUserInstance): IResponse;
}