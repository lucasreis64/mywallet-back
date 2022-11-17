import { postSignUp } from "../controllers/AuthControllers/postSingUp.js";
import express from "express";

const router = express.Router();

router.post("/", postSignUp);

export default router;
