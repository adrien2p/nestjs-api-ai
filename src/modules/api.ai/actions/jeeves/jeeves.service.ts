'use strict';

import { Component } from '@nestjs/common';
import { AbstractAction } from '../abstractAction';
import { IResponse } from '../../interfaces/IResponse';
import { IApiAiUserInstance } from '../../../../models/interfaces/IApiAiUser';
import { IJeevesService } from '../../interfaces/IJeevesService';

@Component()
export class JeevesService extends AbstractAction implements IJeevesService {
    private readonly debugActionName = 'theater.debug';

    constructor () {
        super();
    }

    public run (action: string, apiAiUser: IApiAiUserInstance): IResponse {
        if (action === this.debugActionName) {
            this.debug();
            const apiAiUserFullName = `${apiAiUser.getDataValue('firstName')} ${apiAiUser.getDataValue('lastName')}`;
            return {
                displayText: 'Debug mode is running, look at the console ' + apiAiUserFullName,
                speech: 'Debug mode is running, look at the console ' + apiAiUserFullName
            };
        }

        /* Default response. */
        return {
            displayText: "Sorry, i can't find the action asked",
            speech : "Sorry, i can't find the action asked"
        };
    }
}
