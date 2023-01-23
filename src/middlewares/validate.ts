import { invalidDataError } from "@/errors";
import { Task } from "@/protocols";
import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import { taskSchema } from "@/schemas/tasks.schema";

export function validatePayload(
  params: Task,
  res: Response,
  next: NextFunction
) {
  const { error } = taskSchema.validate(params, { abortEarly: false });
  if (!error) return next();
  return res
    .status(httpStatus.BAD_REQUEST)
    .send(invalidDataError(error.details.map((err) => err.message)));
}

type ValidationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;
