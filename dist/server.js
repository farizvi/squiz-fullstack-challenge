"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const http = require("http");
const app = app_1.App();
http.createServer({}, app).listen(8000, () => {
    console.log('Listening on http://localhost:8000...');
});
