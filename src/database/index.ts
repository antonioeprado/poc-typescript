import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();
export const prisma = new PrismaClient({
  log: [
    { level: "warn", emit: "event" },
    { level: "info", emit: "event" },
    { level: "error", emit: "event" },
  ],
});

prisma.$on("warn", (e) => {
  console.log(e);
});

prisma.$on("info", (e) => {
  console.log(e);
});

prisma.$on("error", (e) => {
  console.log(e);
});

prisma.$on("beforeExit", async () => {
  console.log("beforeExit hook");
});
