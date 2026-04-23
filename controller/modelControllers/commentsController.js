import commentsModel from "../../Model/comment.js";
import { commentVadilate } from "../../secureLayer/commentValidate.js";

export const createComment = async (req, res) => {
    const Id = req.userId;

    try {
        const { postId, comment } = req.body;

        const { error } = commentVadilate.validate(req.body);

        if(error) return res.status(400).json({ Error : error.details[0].message});

        const commentCreated = await commentsModel.create({
            userId : Id,
            postId : postId,
            comment : comment
        });

        if(!commentCreated) return res.status(404).json("Commnet not Created");

        res.status(201).json(commentCreated);
    } catch (error) {
        res.status(500).json(error.message);
    }
}