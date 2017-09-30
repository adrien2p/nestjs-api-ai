'use strict';

import { Component } from '@nestjs/common';
import { AbstractAction } from '../abstractAction';
import { IResponse } from '../../interfaces/IResponse';
import { IJeevesService } from '../../interfaces/IJeevesService';
import { ApiAiUser } from '../../../common/models/ApiAiUser';

@Component()
export class JeevesService extends AbstractAction implements IJeevesService {
    private readonly debugActionName = 'theater.debug';

    constructor () {
        super();
    }

    public async run (action: string, apiAiUser: ApiAiUser): Promise<IResponse> {
        if (action === this.debugActionName) {
            this.debug();
            const apiAiUserFullName = `${apiAiUser.getDataValue('firstName')} ${apiAiUser.getDataValue('lastName')}`;
            const response = {
                displayText: 'Debug mode is running, look at the console ' + apiAiUserFullName,
                speech: 'Debug mode is running, look at the console ' + apiAiUserFullName
            };
            await this.save('jeeves', response, apiAiUser);
            return response;
        }

        /* Default response. */
        return {
            displayText: 'You should ask me every thing',
            speech : 'You should ask me every thing'
        };
    }
}
