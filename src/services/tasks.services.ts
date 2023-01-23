import {
  createTask,
  retrieveAllTasks,
  editTask,
  removeTask,
} from "../repositories/tasks.repository.js";
import { Tasks } from "@prisma/client";
import { Task } from "@/protocols/tasks.protocols.js";

async function findAllTasks(): Promise<Tasks[]> {
  return await retrieveAllTasks();
}

async function taskCreation(params: Task) {
  return await createTask(params);
}

async function taskEditing(id: string, params: Task) {
  return await editTask(Number(id), params);
}

async function taskRemoval(id: string) {
  return await removeTask(Number(id));
}

export { findAllTasks, taskCreation, taskEditing, taskRemoval };
