import axios from "axios";
import path from "path";
import Analysis from "../models/analysis.model.js";

export const analyzeData = async (req, res) => {
  try {
    const filePath = path.resolve(req.file.path);

    const response = await axios.post("http://localhost:8000/analyze", {
      filePath,
    });

    const result = response.data;

    // ✅ SAVE TO DB
    const saved = await Analysis.create({
      user: req.user.id, // 🔥 requires auth
      fileName: req.file.originalname,
      summary: result.summary,
      prediction: result.prediction,
    });

    res.json(saved);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Error analyzing data" });
  }
};

export const getAnalysisHistory = async (req, res) => {
  try {
    const data = await Analysis.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching history" });
  }
};