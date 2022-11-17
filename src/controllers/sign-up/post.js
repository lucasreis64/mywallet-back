import { clients } from "../../database/mongoDB";
import { signUpSchema } from "../../schemas/sign-up-schema.js";
import { validation } from "../../functions/validation.js";
import bcrypt from "bcrypt";

export async function postSignUp(req, res) {
    const newUser = req.body;

    if (!validation(newUser, res, signUpSchema)) return;

    delete newUser.repeatPassword;

    const passwordHash = bcrypt.hashSync(newUser.password, 10);

    await clients.insertOne({ ...newUser, password: passwordHash });

    res.sendStatus(201);
}
