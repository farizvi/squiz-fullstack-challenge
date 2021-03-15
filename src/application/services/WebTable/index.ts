import { AxiosRequestConfig } from "axios";
import BaseService from '../BaseService';
import { WebTable } from "../../../domain/entities";
import { WebTableResult } from "../../dtos/WebTableResult";
import { WebTableDTO } from "../../dtos/WebTableDTO";

class WebTableService extends BaseService {
    constructor() {
        super();
    }

    public async getWebTables(
        currentPage = 1,
        pageSize = 10,
        maxPages = 10,
        extraOptions?: AxiosRequestConfig,
        shouldHandleMessaging = true
    ) {
        const url = 'https://run.mocky.io/v3/00c23899-a434-4f64-9e3c-bd3f9cbb6b45'; // process.env["WEB_TABLE_GET_URL"];
        const result: WebTable[] = await this.get<WebTable[]>(url, extraOptions, shouldHandleMessaging);

        const totalItems = result.length;

        const totalPages = Math.ceil(result.length / pageSize);
        if (currentPage < 1)
            currentPage = 1
        else if (currentPage > totalPages)
            currentPage = totalPages;

        let startPage: number;
        let endPage: number;

        if (totalPages <= maxPages) {
            startPage = 1;
            endPage = totalPages;
        } else {
            // total pages more than max so calculate start and end pages
            let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
            let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
            if (currentPage <= maxPagesBeforeCurrentPage) {
                // current page near the start
                startPage = 1;
                endPage = maxPages;
            } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
                // current page near the end
                startPage = totalPages - maxPages + 1;
                endPage = totalPages;
            } else {
                // current page somewhere in the middle
                startPage = currentPage - maxPagesBeforeCurrentPage;
                endPage = currentPage + maxPagesAfterCurrentPage;
            }
        }

        // calculate start and end item indexes
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // create an array of pages to ng-repeat in the pager control
        let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

        const paginatedResult = result.slice(startIndex, endIndex + 1);
        const paginatedResultToReturn: WebTableDTO[] = [];

        paginatedResult.map(r => paginatedResultToReturn.push({ title: r.title, pageTitle: r.pageTitle, url: r.url}));

        const resultData: WebTableResult = {
            totalRecords: totalItems,
            totalPages: pages.length,
            recordsPerPage: pageSize,
            pageNumber: currentPage,
            data: paginatedResultToReturn
        }

        return resultData;
    }
}

export default WebTableService;