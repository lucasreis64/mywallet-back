import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import signUpRouter from "./src/routers/sign-up.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(json());

app.use("/sign-up", signUpRouter);

app.listen(process.env.PORT, () => {
    console.log("Running on port " + process.env.PORT);
});
