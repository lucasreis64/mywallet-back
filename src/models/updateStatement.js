import { accounts } from "../database/mongoDB.js";


export async function updateStatement (statement, id, res) {
    try {
        await accounts.updateOne(
            { _id: id },
            {
                $set: {
                    statement: statement,
                },
            }
        );
        res.sendStatus(201);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}