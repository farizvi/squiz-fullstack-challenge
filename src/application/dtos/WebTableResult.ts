import { WebTableDTO } from "./WebTableDTO";

export interface WebTableResult {
    totalRecords: number;
    totalPages: number;
    recordsPerPage: number;
    pageNumber: number;
    data: WebTableDTO[];
}