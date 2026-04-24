import { useEffect, useState } from "react";
import API from "../utils/axios";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TaskList from "../components/TaskList";
import Upload from "../components/Upload";
import Charts from "../components/Charts";
import AnalysisHistory from "../components/AnalysisHistory";

export default function Dashboard() {
  const [analysis, setAnalysis] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

 useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    document.body.classList.add("dark"); // ✅ ADD THIS
  } else {
    document.documentElement.classList.remove("dark");
    document.body.classList.remove("dark"); // ✅ ADD THIS
  }
}, [darkMode]);

  useEffect(() => {
    API.get("/data/history").then((res) => {
      if (res.data.length > 0) {
        setAnalysis(res.data[0]);
      }
    });
  }, []);

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-4 bg-gray-100 dark:bg-gray-900 min-h-screen">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        <div className="grid grid-cols-3 gap-4 mt-4">
          <Charts data={analysis} darkMode={darkMode} />
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">
          <TaskList />
          <Upload setAnalysis={setAnalysis} />
          <AnalysisHistory setAnalysis={setAnalysis} />
        </div>
      </div>
    </div>
  );
}