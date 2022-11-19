import { statementsSchema } from "../../models/statementsSchema.js";
import { validateBySchema } from "../../middlewares/validateBySchema.js";
import { updateStatement } from "../../models/updateStatement.js";

export async function postAccounts(req, res) {
    const { account } = res.locals;
    const { operation, value } = req.body;
    const { statement } = account;
    const id = account._id;

    statement.forEach((d, idx) => (d.id = idx));

    if (!validateBySchema(req.body, res, statementsSchema)) return;

    if (operation === "debits")
        statement.push({ type: "debits", value: value, id: statement.length });
    else
        statement.push({ type: "credits", value: value, id: statement.length });

    updateStatement(statement, id, res);
}
