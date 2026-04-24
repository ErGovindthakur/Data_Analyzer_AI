import Task from "../models/task.model.js";
import asyncHandler from "../utils/asyncHandler.js";

import { createTaskService } from "../services/task.service.js";

export const createTask = asyncHandler(async (req, res) => {
  const task = await createTaskService(req.body);
  res.json(task);
});

export const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

export const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(task);
});

export const deleteTask = asyncHandler(async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});