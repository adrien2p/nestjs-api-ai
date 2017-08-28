'use strict';
import { IAbstractAction } from "../interfaces/IAbstractAction";

export abstract class AbstractAction implements IAbstractAction{
    public data: any;
    protected agentName: string;

    constructor() {}

    protected async saveData(data: any): Promise<any> {

    }

    protected debug() {
        console.log("====================================================================");
        console.log("=                          DEBUG MODE                              =");
        console.log("====================================================================");
        console.log("=                          REQUEST                                 =");
        console.log("====================================================================");
        console.log(this.data);
        console.log("====================================================================");
        console.log("=                          RESULT                                  =");
        console.log("====================================================================");
        console.log(this.data.result);
        console.log("====================================================================");
        console.log("=                          ORIGINAL REQUEST                        =");
        console.log("====================================================================");
        console.log(this.data.originalRequest);
        console.log("====================================================================");
        console.log("=                          ORIGINAL REQUEST DATA                   =");
        console.log("====================================================================");
        console.log(this.data.originalRequest.data);
        console.log("====================================================================");
        console.log("=                          ORIGINAL REQUEST DATA USER              =");
        console.log("====================================================================");
        console.log(this.data.originalRequest.data.user);
    }
}