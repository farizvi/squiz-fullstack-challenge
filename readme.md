# Squiz Full Stack Challenge

### Requirements
 - The amount of data is dynamic, it works for 2 entries as well as for 100, maybe 10 000
 - Querying parts of the data is performant
 - Listing the data is performant 
 - There is documentation on how to communicate with the API
 - There are tests

### Solution
This API is implemented using node and Typescript. To run it install the dependencies by executing following command
```
npm install
```
Once the dependencies are installed then execute the following command
```
npm run serve
```
When the application is running, the API method can be executed using following url

http://localhost:4000/api/webtables?currentPage=1&pageSize=10

API method will return data in following format

```
{
    "result": {
        "totalRecords": 100,
        "totalPages": 4,
        "recordsPerPage": 25,
        "pageNumber": 3,
        "data": [
            {
                "title": "",
                "pageTitle": "Sunset review of the Prescott Historical Society of Arizona :: Arizona State Government Publications",
                "url": "http://azmemory.azlibrary.gov/cdm/singleitem/collection/statepubs/id/9494/rec/5007"
            },
            {
                "title": "",
                "pageTitle": "Thunderbird Magazine, Volume 51, Number 2 1997 :: Thunderbird School of Global Management - Alumni Magazine Archive",
                "url": "http://azmemory.azlibrary.gov/cdm/singleitem/collection/tgmama/id/81/rec/15"
            },
            {
                "title": "",
                "pageTitle": "UNION TERMINAL STATION for The A. T. and S. F. RY Co. and ARIZONA EASTERN Ry Co. at Phoenix, Ariz., sheet 9 of 15. :: Atchison, Topeka & Santa Fe Railway Company (Albq Division) Collection",
                "url": "http://azmemory.azlibrary.gov/cdm/singleitem/collection/whsrail/id/323/rec/4837"
            },
            ...
        ]
    }
}
```

### Running the tests

Tests can be executed using following command

```
npm run test
```