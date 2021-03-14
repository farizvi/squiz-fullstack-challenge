import express from 'express';
import * as dotenv  from 'dotenv';
import { WebTableRoutes } from "./api/routes/webtable.routes";

class Server {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
        dotenv.config();
    }

    public routes(): void {
        this.app.use(function(req, res, next) {
            for (let key in req.query)
            {
                req.query[key.toLowerCase()] = req.query[key];
            }
            next();
        });
        this.app.use('/api/webtables', new WebTableRoutes().router);
    }

    public config(): void {
        this.app.set('port', process.env.PORT || 4000);
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    public start(): void {
        this.app.listen(this.app.get("port"), () => {
            console.log(
                "  API is running at http://localhost:%d",
                this.app.get("port")
            );
        });
    }
}

const server = new Server();
server.start();