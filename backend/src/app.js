import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import taskRoutes from "./routes/task.routes.js";
import authRoutes from "./routes/auth.routes.js";
import dataRoutes from "./routes/data.routes.js";

dotenv.config();

const app = express();

app.use(cors({ origin: "*", credentials: true }));
app.use(express.json());
app.use(morgan("dev"))
app.use(helmet());

app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
}))

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/data", dataRoutes);

export default app;