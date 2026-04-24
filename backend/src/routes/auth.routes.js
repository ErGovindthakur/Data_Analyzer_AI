import express from "express";
import { register, login } from "../controllers/auth.controller.js";
import { registerValidator } from "../validators/auth.validator.js";
import { validationResult } from "express-validator";

const router = express.Router();

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

router.post("/register", registerValidator, validate, register);
router.post("/login", login);

export default router;