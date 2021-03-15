import axios, { AxiosResponse } from 'axios'
import { WebTableService } from "../src/application/services";

jest.mock('axios')

const mockData = {
    "result": {
        "totalRecords": 10,
            "totalPages": 4,
            "recordsPerPage": 3,
            "pageNumber": 1,
            "data": [
            {
                "title": "Mock title",
                "pageTitle": "1980s.FM Forums - viewtopic - Add: Private Audition by Heart | Rock (1982)",
                "url": "http://1980s.fm/modules.php?name=Forums&file=viewtopic&t=820"
            },
            {
                "title": "",
                "pageTitle": "1980s.FM",
                "url": "http://1980s.fm/modules.php?name=Your_Account&redirect=posting&mode=quote&p=899"
            },
            {
                "title": "3rd entry",
                "pageTitle": "12 Vivid/Abstract SHADERS - Materials And Shaders | 3DOcean",
                "url": "http://3docean.net/item/12-vividabstract-shaders/90178?WT.ac=category_item&WT.seg_1=category_item&WT.z_author=munjakos"
            }
        ]
    }
};

const axiosResponse: AxiosResponse = {
    data: mockData,
    status: 200,
    statusText: 'OK',
    config: {},
    headers: {}
}

describe('WebTable API tests', () => {
    it('invokes API method to get data', async () => {

        const service = new WebTableService();
        const result = await service.getWebTables(1, 3);
        expect(result.data).toEqual(axiosResponse.data.result.data);
        expect(axios.get).toHaveBeenCalled();
    })

    it('returns first page when current page is less than 1', async () => {
        const service = new WebTableService();
        const result = await service.getWebTables(-1, 3);
        expect(result.pageNumber).toEqual(1);
    })

    it ('returns last page when current page is greater than total number of pages', async () => {
        const service = new WebTableService();
        const result = await service.getWebTables(4, 1);
        expect(result.pageNumber).toEqual(3);
    })
});

