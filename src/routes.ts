import { Router  } from "express";
import { CreateControllerTask } from "./Controllers/CreateControllerTask";
import { CreateControllerUser } from "./Controllers/CreateControllerUser";

const router = Router()

const createControllerUser = new CreateControllerUser()
const createControllerTask = new CreateControllerTask

router.post('/task_manager/user',createControllerUser.handle)
router.post("/task_manager/tasks",createControllerTask.hanle)


export {router}