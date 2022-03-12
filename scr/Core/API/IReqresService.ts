import type { ReqType } from "../Services/ReqresService/ReqType";

/**
* @IReqresService
* Provides API signatures for specific implementations of request/response module
*/
export interface IReqresService {

    /**
    * @send
    * Creates and executes a network request based on the passed arguments
    * @param relativePath server API route
    * @param method - HTTPRequest method 
    * @param data - any data
    */
    send(relativePath: string, method: ReqType, data?: any): Promise<Response>;

};