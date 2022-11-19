import Joi from "joi";

export const statementsSchema = Joi.object({
    operation: Joi.string().valid("debits", "credits").required(),
    value: Joi.number().min(0).required(),
});
