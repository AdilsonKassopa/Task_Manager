import { getCustomRepository } from "typeorm";
import { TasksRepositories } from "../repositories/tasksRepositories";

interface Tasks{
    nome:string,
    usuario_id:string,
    data_inicio:Date,
    data_fim:Date,
    estado:boolean
}

class CreateTaskService{
    async execute({nome,usuario_id,data_inicio,data_fim,estado}:Tasks){
        const tasksRepositories = getCustomRepository(TasksRepositories)
        if(!nome){
            throw new Error('Tasks Invalid')
        }
        
        const task = tasksRepositories.create(
            {
                nome,
                usuario_id,
                data_inicio,
                data_fim,
                estado
            }
        )
        

        await tasksRepositories.save(task)
        return task 
    }
}

export {CreateTaskService}