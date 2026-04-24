import express from "express";
import multer from "multer";
import { protect } from "../middleware/auth.middleware.js";
import { analyzeData, getAnalysisHistory } from "../controllers/data.controller.js";

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/upload", protect, upload.single("file"), analyzeData);
router.get("/history", protect, getAnalysisHistory);

export default router;