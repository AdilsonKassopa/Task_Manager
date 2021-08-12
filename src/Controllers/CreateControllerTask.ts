import { Request, Response } from "express";
import { CreateTaskService } from "../Service/createTaskService";

class CreateControllerTask{
    async hanle(req:Request,res:Response){
        const {nome,usuario_id,data_inicio,data_fim,estado} = req.body
        const createTaskService = new CreateTaskService 
        const task = await createTaskService.execute({nome,usuario_id,data_inicio,data_fim,estado})
        return res.json(task)
    }
}

export {CreateControllerTask}