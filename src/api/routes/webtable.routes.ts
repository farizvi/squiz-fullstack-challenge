import { Router } from 'express';
import WebTableController from "../controllers/webtable.controller";

class WebTableRoutes {
   public router: Router;
   public WebTablesController: WebTableController = new WebTableController();

   constructor() {
       this.router = Router();
       this.routes();
   }

   routes() {
       this.router.get('/', this.WebTablesController.getWebTables);
   }
}

export default WebTableRoutes;