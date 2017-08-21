'use strict';

import { IActionServiceResponse } from "./IActionServiceResponse";

export interface IActionService {
    /**
     * @description: Find the action related to the request made by the user.
     * @param {any} data
     * @return {IActionServiceResponse}
     */
    run(data: any): Promise<IActionServiceResponse>;
}