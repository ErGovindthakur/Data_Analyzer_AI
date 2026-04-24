import API from "../utils/axios"; // ✅ use your instance

export default function Upload({ setAnalysis }) {
  const handleUpload = async (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);

    try {
      const res = await API.post("/data/upload", formData); // ✅ FIXED
      setAnalysis(res.data);
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
      <h2 className="mb-3 font-semibold">Upload CSV</h2>
      <input type="file" onChange={handleUpload} />
    </div>
  );
}