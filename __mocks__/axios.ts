import { AxiosResponse } from 'axios';

const mockResponseData =
    [
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
    ];

const axiosResponse: AxiosResponse = {
    data: mockResponseData,
    status: 200,
    statusText: 'OK',
    config: {},
    headers: {},
};

export default {
    default: {
        get: jest.fn().mockImplementation(() => Promise.resolve(axiosResponse)),
    },
    get: jest.fn(() => Promise.resolve(axiosResponse)),
};