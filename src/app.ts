import * as express from "express";
import { Express } from "express";
import WebTableRoutes from "./api/routes/webtable.routes";

export const App = (): Express => {
    const app = express();

    app.get('/', (_, res: express.Response) => {
        res.send('Web server running...');
    });

    app.use('/api/webtables', new WebTableRoutes().routes)

    return app;
}