import { Router } from 'express';
import { WebTableController } from "../controllers/webtable.controller";

export class WebTableRoutes {
   public router: Router;
   public webTableController: WebTableController = new WebTableController();

   constructor() {
       this.router = Router();
       this.routes();
   }

   routes = () => {
       this.router.get('/', this.webTableController.getWebTables);
   }
}