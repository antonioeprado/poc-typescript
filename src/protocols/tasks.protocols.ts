import { Tasks } from "@prisma/client";

export type Task = Omit<Tasks, "id">;
