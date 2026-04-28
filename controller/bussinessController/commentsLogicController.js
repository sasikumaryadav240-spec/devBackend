import commentsModel from "../../Model/comment.js";
import postModel from "../../Model/post.js";
import User from "../../Model/user.js"

export const commentsperPosts = async (req, res) => {
    try {
        const comments = await commentsModel.find({postId : req.params.id})
                         .populate("userId", "-password")
                         .populate("postId")
                         .sort({ createdAt : -1 });
        if(!comments) return res.status(404).json("No Comments yet!");

        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json(error.message);
    }
}