import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getTasks, getTask, createTask, updateTask, deleteTask} from "../controllers/task.controller.js";
import {validateSchema} from "../middlewares/validator.middleware.js"
import {taskSchema} from "../schemas/task.schema.js" 

const router = Router();

router.get("/tasks", authRequired, getTasks);
router.get("/task/:id", authRequired, getTask);
router.post("/task", authRequired, validateSchema(taskSchema), createTask);
router.put("/task/:id", authRequired, updateTask);
router.delete("/task/:id", authRequired, deleteTask);

export default router;
