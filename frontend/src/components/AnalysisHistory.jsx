import { useEffect, useState } from "react";
import API from "../utils/axios";

export default function AnalysisHistory({ setAnalysis }) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    API.get("/data/history").then((res) => {
      setHistory(res.data);
    });
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
      <h2 className="font-semibold mb-3">📂 Analysis History</h2>

      {history.map((item) => (
        <div
          key={item._id}
          onClick={() => setAnalysis(item)}
          className="cursor-pointer p-2 border-b hover:bg-gray-100 rounded"
        >
          <p className="text-sm font-medium">{item.fileName}</p>
          <p className="text-xs text-gray-500">
            Prediction: {item.prediction.toFixed(2)}
          </p>
        </div>
      ))}
    </div>
  );
}