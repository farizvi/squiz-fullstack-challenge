import * as express from "express";
import { Express } from "express";

export const App = (): Express => {
    const app = express();

    app.get('/', (_, res: express.Response) => {
        res.send('Hello World!');
    });

    return app;
}