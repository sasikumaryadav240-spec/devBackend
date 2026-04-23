import joi from "joi";

export const postValidate = joi.object({
    header: joi.string().min(5).max(100).required(),
    idea : joi.string().min(20).required()
});