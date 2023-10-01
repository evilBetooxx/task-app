import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getTasks, getTask, createTask, updateTask, deleteTask} from "../controllers/task.controller.js";

const router = Router();

router.get("/tasks", authRequired, getTasks);
router.get("/task/:id", authRequired, getTask);
router.post("/task", authRequired, createTask);
router.put("/task/:id", authRequired, updateTask);
router.delete("/task/:id", authRequired, deleteTask);

export default router;
