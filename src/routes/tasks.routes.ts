import {
  getAllTasks,
  postTask,
  patchTask,
  deleteTask,
  getTaskById,
} from "@/controllers/";
import { Router } from "express";
import { validateBody } from "@/middlewares";

const tasksRouter = Router();

tasksRouter.get("/all", getAllTasks);
tasksRouter.get("/:id", getTaskById);
tasksRouter.post("/", validateBody, postTask);
tasksRouter.patch("/:id", validateBody, patchTask);
tasksRouter.delete("/:id", deleteTask);

export { tasksRouter };
