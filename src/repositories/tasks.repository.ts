import { prisma } from "@/database";
import { PrismaPromise, Tasks } from "@prisma/client";
import { Task } from "@/protocols";

export function retrieveAllTasks(): PrismaPromise<Tasks[]> {
  return prisma.tasks.findMany();
}

export function createTask(data: Task) {
  return prisma.tasks.create({ data });
}

export function editTask(id: number, data: Task) {
  return prisma.tasks.update({
    where: {
      id,
    },
    data,
  });
}

export function removeTask(id: number) {
  return prisma.tasks.delete({
    where: { id },
  });
}
