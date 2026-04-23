import joi from "joi";

export const commentVadilate = joi.object({
    comment : joi.string().min(1).max(500).required(),
    postId: joi.string().required()
});