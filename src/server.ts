import { App } from "./app";
import * as http from "http";

const app = App();

http.createServer({}, app).listen(8000, () => {
    console.log('Listening on http://localhost:8000...');
});