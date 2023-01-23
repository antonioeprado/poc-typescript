import {
  findAllTasks,
  taskCreation,
  taskEditing,
  taskRemoval,
} from "@/services";
import { Request, Response } from "express";
import httpStatus from "http-status";
import { Task } from "@/protocols";

export async function getAllTasks(req: Request, res: Response) {
  try {
    const allTasks = await findAllTasks();
    return res.status(httpStatus.OK).send(allTasks);
  } catch (error) {
    return res.status(httpStatus.NOT_FOUND).send(error);
  }
}

export function postTask(req: Request, res: Response) {
  const task = req.body as Task;
  try {
    taskCreation(task);
    res.sendStatus(httpStatus.OK);
  } catch (error) {
    res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export function patchTask(req: Request, res: Response) {
  const { id } = req.params as Record<string, string>;
  try {
    taskEditing(id, req.body);
    res.sendStatus(httpStatus.OK);
  } catch (error) {
    res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export function deleteTask(req: Request, res: Response) {
  const { id } = req.params as Record<string, string>;
  try {
    taskRemoval(id);
    res.sendStatus(httpStatus.OK);
  } catch (error) {
    res.sendStatus(httpStatus.BAD_REQUEST);
  }
}
