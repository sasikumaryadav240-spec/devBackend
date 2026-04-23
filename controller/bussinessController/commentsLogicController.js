import commentsModel from "../../Model/comment.js";

export const commentsperPosts = async (req, res) => {
    try {
        const comments = await commentsModel.find({postId : req.params.id})
                         .sort({ createdAt : -1 });
        if(!comments) return res.status(404).json("No Comments yet!");

        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json(error.message);
    }
}