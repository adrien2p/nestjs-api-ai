'use strict';

import { Component } from '@nestjs/common';
import { IInterceptorService } from '../../interfaces/IInterceptorService';
import { JeevesService } from './jeeves.service';
import { ApiAiUser } from '../../../common/index';

@Component()
export class InterceptorService implements IInterceptorService {
    constructor (private jeevesService: JeevesService) { }

    public parse (data: any, apiAiUser: ApiAiUser): any {
        const action = data.result.action.toLowerCase();
        const target = action.split('.')[0];

        switch (target) {
        case 'theater':
            console.log('target THEATER called.');
            this.jeevesService.data = data;
            return this.jeevesService.run(action, apiAiUser);
        default:
            return {
                displayText: "Sorry, i can't answer you request",
                speech: "Sorry, i can't answer you request"
            };
        }
    }
}
