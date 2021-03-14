import BaseService from '../BaseService';
import {AxiosRequestConfig} from "axios";
import { WebTable } from "../../../domain/entities";

class WebTableService extends BaseService {
    constructor() {
        super();
    }
    public async getWebTables(extraOptions?: AxiosRequestConfig, shouldHandleMessaging = true) {
        return await this.get<WebTable[]>('', extraOptions, shouldHandleMessaging);
    }
}

export default WebTableService;