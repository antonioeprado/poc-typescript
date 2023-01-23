import { NextFunction, Request, Response } from "express";
import { validatePayload } from "./validate";

export function validateBody(req: Request, res: Response, next: NextFunction) {
  return validatePayload(req.body, res, next);
}
