import express from "express";
import multer from "multer";
import { analyzeData } from "../controllers/data.controller.js";

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("file"), analyzeData);

export default router;