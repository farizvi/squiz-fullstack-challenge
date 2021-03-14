import axios, { AxiosRequestConfig } from 'axios';
import {ErrorReason} from "./ErrorReason";

abstract class BaseService {

    async getHeaders(): Promise<AxiosRequestConfig> {
        const config: AxiosRequestConfig = {
            headers: {
                'Content-type': 'application/json',
            },
        };

        return config;
    }

    handleError(rejectHandler: Function, error: any, defaultMessage: string, shouldHandleMessaging: boolean) {
        let response = error.response;

        if (!response || !response.data) {
            response = {
                ...response,
                data: {
                    reason: ErrorReason.Failure,
                    messages: [],
                },
            };

            if (!error.response) {
                response.data.messages.push('Cannot connect to server.');
            } else if (error.response.status === 401 || error.response.status === 403) {
                response.data.reason = ErrorReason.AccessDenied;
                response.data.messages.push('Access Denied.');
            } else {
                response.data.messages.push(defaultMessage);
            }
        }

        if (!response.data.messages) {
            response.data.messages = [];
        }

        if (!response.data.reason) {
            response.data.reason = ErrorReason.Failure;
        }

        // if (shouldHandleMessaging && this.genericErrorHandler) {
        //     this.genericErrorHandler(response.data.messages.join(','));
        // }

        rejectHandler(response.data);
    }

    async get<T = any>(url: string, extraOptions?: AxiosRequestConfig, shouldHandleMessaging: boolean = true) {
        const options = Object.assign({}, await this.getHeaders(), extraOptions);

        return new Promise<T>((resolve, reject) => {
            axios
                .get<T>(url, options)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    this.handleError(reject, error, 'Failed to get.', shouldHandleMessaging);
                });
        });
    }
}

export default BaseService;