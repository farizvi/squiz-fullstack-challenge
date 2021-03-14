import { WebTableService } from "../../application/services";
import { Request, Response } from "express";

export class WebTableController {
    public async getWebTables(req: Request, res: Response): Promise<void> {
        const { query: { currentpage, pagesize } } = req;
        const service = new WebTableService();
        const webTablesData = await service.getWebTables(parseInt(currentpage as string), parseInt(pagesize as string));

        res.status(200).json({
            result: webTablesData
        });
    }
}