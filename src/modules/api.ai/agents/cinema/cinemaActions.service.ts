'use strict';

import { Component } from "@nestjs/common";
import { IActionService } from "../../interfaces/IActionService";
import { IActionServiceResponse } from "../../interfaces/IActionServiceResponse";
import { AbstractAction } from "../abstractAction";

@Component()
export class CinemaActionsService extends AbstractAction implements IActionService {
    private readonly actions: Array<string> = [
        'input.getRelease'
    ];

    constructor() {
        super('cinema');
    }

    public async run(data: any): Promise<IActionServiceResponse> {
        let response: IActionServiceResponse;

        switch (data.result.action) {
            case 'input.getRelease':
                /* Saved data before any action. */
                await this.saveData('actions/input/getRealse', data);
                response = await this.getRelease(data);
                console.log(`Action called : ${data.result.action} from "cinema" agent with the following statement : ${data.result.resolvedQuery}.`);
                break;
            default:
                throw new Error(`Unknown action from "Cinema agent" for ${data.result.action}`);
        }

        return response;
    }

    private async getRelease(data: any) {
        const response = {
            speech: `Demande "${data.result.resolvedQuery}" pour "${data.result.action}" 
                    de l'intent "${data.result.metadata.intentName}"`,
            displayText: 'toto',
            source: this.constructor.name
        };

        await this.saveData('action/output/getRelease', Object.assign({
            requestId: data.id,
            timestamp: data.timestamp,
            lang: data.lang,
        }, { response }));

        return response;
    }
}