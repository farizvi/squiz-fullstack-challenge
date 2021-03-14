"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express = require("express");
const App = () => {
    const app = express();
    app.get('/', (_, res) => {
        res.send('Hello World!');
    });
    return app;
};
exports.App = App;
