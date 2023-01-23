import { Task } from "@/protocols";
import Joi from "joi";

export const taskSchema = Joi.object({
  taskName: Joi.string().min(3).required(),
  taskDescription: Joi.string().max(30),
  dueTo: Joi.date(),
  createdAt: Joi.forbidden(),
});
