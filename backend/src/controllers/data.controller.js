import axios from "axios";

export const analyzeData = async (req, res) => {
  try {
    const filePath = req.file.path;

    const response = await axios.post("http://localhost:8000/analyze", {
      filePath,
    });

    res.json(response.data);
  } catch (err) {
    res.status(500).json({ msg: "Error analyzing data" });
  }
};