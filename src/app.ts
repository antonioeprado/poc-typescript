import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { tasksRouter } from "@/routes";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.get("/health", (req, res) => res.send("Ok!"));
app.use("/tasks", tasksRouter);

const PORT = 4000 || process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
