import { useEffect, useState } from "react";
import API from "../utils/axios"; // ✅ use your instance

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    API.get("/tasks")
      .then(res => {
        console.log(res.data); // debug
        setTasks(Array.isArray(res.data) ? res.data : []);
      })
      .catch(err => {
        console.error(err);
        setTasks([]);
      });
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
      <h2 className="font-semibold mb-3">Tasks</h2>

      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks found</p>
      ) : (
        tasks.map(task => (
          <div key={task._id} className="flex justify-between border-b py-2">
            <span>{task.title}</span>
            <span className="text-sm text-gray-500">{task.status}</span>
          </div>
        ))
      )}
    </div>
  );
}