import { Repository,EntityRepository } from "typeorm";
import { Tasks } from "../entities/Tasks";

@EntityRepository(Tasks)

class TasksRepositories extends Repository <Tasks>{}

export {TasksRepositories}