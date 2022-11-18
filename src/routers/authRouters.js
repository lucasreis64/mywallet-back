import { postSignUp } from "../controllers/AuthControllers/postSingUp.js";
import express from "express";
import { postSignIn } from "../controllers/AuthControllers/postSignIn.js";


const router = express.Router();

router.post("/sign-up", postSignUp);
router.post("/sign-in", postSignIn)

export default router;
