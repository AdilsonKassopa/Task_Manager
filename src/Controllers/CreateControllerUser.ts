import {Request,Response} from "express"
import { CreateUserService } from "../Service/createUserService"

class CreateControllerUser { 
    async handle(req:Request,res:Response){
        const {Nome,Email,Senha,FotoImg} = req.body

        const createUserService = new CreateUserService()

       const user = await createUserService.execute({Nome,Email,Senha,FotoImg})

       return res.json(user)
    }
}

export {CreateControllerUser}