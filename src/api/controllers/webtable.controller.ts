import { WebTableService } from "../../application/services";
import { WebTableDTO } from "../dtos/WebTableDTO";
import { Request, Response } from "express";

class WebTableController {
    public async getWebTables(req: Request, res: Response): Promise<void> {
        const service = new WebTableService();
        const webTablesData = await service.getWebTables();
        let dataToReturn: WebTableDTO[] = [];

        webTablesData.map(data => (
            dataToReturn.push({
                title: data.title,
                pageTitle: data.pageTitle,
                url: data.url
            })
        ));

        res.json(dataToReturn);
    }
}

export default WebTableController;