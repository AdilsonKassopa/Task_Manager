import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/usersRepositories"

interface Users{
    Nome:string,
    Email:string,
    Senha:string,
    FotoImg:string
}

class CreateUserService{
    async execute({Nome,Email,Senha,FotoImg}:Users){
        const userRepositories = getCustomRepository(UsersRepositories)

        if(!Email){
            throw new Error('Email invalid')
        }

        const useralreadyExists = await userRepositories.findOne({Nome})
        if(useralreadyExists){
            throw new Error('Users alreadyExists')
        }

        const user = userRepositories.create({
            Nome,
            Email,
            Senha,
            FotoImg
        })

        await userRepositories.save(user)

        return user
    }
}

export {CreateUserService}