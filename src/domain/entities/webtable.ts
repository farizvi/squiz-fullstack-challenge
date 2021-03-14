export default interface WebTable {
    relations: any[];
    pageTitle: string;
    title: string;
    url: string;
    hasHeader: boolean;
    headerPosition: string;
    tableType: string;
    tableNum: number;
    s3Link: string;
    recordEndOffset: number;
    tableOrientation: string;
    tableContextTimestampBeforeTable: string;
    tableContextTimestampAfterTable: string;
    lastModified: Date;
    textBeforeTable: string;
    textAfterTable: string;
    hasKeyColumn: boolean;
    keyColumnIndex: number;
    headerRowIndex: number;
}