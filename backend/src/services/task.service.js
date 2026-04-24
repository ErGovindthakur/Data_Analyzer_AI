import Task from "../models/task.model.js";

export const createTaskService = async (data) => {
  return await Task.create(data);
};