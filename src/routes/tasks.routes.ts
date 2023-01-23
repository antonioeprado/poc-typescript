import {
  getAllTasks,
  postTask,
  patchTask,
  deleteTask,
} from "../controllers/tasks.controllers.js";
import { Router } from "express";

const router = Router();

router.get("/all", getAllTasks);
router.post("/", postTask);
router.patch("/:id", patchTask);
router.delete("/:id", deleteTask);

export default router;
