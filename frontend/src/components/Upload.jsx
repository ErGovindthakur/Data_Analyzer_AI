import axios from "axios";
import { useState } from "react";

export default function Upload() {
  const [result, setResult] = useState(null);

  const handleUpload = async (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);

    const res = await axios.post("/data/upload", formData);
    setResult(res.data);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="mb-3 font-semibold">Upload CSV</h2>

      <input type="file" onChange={handleUpload} />

      {result && (
        <div className="mt-4">
          <p>Rows: {result.summary.rows}</p>
          <p>Prediction: {result.prediction}</p>
        </div>
      )}
    </div>
  );
}