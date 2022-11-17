import { postSignUp } from "../controllers/sign-up/post";
import express from "express";

const router = express.Router();

router.post("/", postSignUp);

export default router;
