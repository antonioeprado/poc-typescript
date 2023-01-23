import {
  createTask,
  retrieveAllTasks,
  editTask,
  removeTask,
  retrieveTaskById,
} from "@/repositories";
import { Tasks } from "@prisma/client";
import { Task } from "@/protocols";

async function findAllTasks(): Promise<Tasks[]> {
  return await retrieveAllTasks();
}

async function findTaskById(id: string): Promise<Tasks> {
  return await retrieveTaskById(Number(id));
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

export { findAllTasks, taskCreation, taskEditing, taskRemoval, findTaskById };
