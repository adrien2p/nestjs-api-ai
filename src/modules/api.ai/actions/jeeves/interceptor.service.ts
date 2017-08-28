`use strict`;
import { Component } from "@nestjs/common";
import { IApiAiUserInstance } from "../../../../models/interfaces/IApiAiUser";
import { IInterceptorService } from "../../interfaces/IInterceptorService";
import { TheaterActionsService } from "./theater/theaterActions.service";

@Component()
export class InterceptorService implements IInterceptorService {
    constructor(private theaterActionService: TheaterActionsService) { }

    public parse(data: any, apiAiUser: IApiAiUserInstance): any {
        const action = data.result.action.toLowerCase();
        const target = action.split('.')[0];

        switch (target) {
            case 'theater':
                console.log('target THEATER called.');
                this.theaterActionService.data = data;
                return this.theaterActionService.run(action, apiAiUser);
            default:
                return {
                    displayText: "Sorry, i can't answer you request",
                    speech: "Sorry, i can't answer you request"
                };
        }
    }
}