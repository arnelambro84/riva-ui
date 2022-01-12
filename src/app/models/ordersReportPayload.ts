import { Orders } from "./orderReport"; 

export interface OrdersReportPayload{
    succeeded:boolean,
    message:string,
    errors:string[],
    data: Orders[]
}