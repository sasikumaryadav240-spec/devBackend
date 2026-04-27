import postModel from "../../Model/post.js";

export const toggleLike = async (req, res) => {
    try {
        const postId = req.params.id;
        const userId = req.userId;

        const post = await postModel.findById(postId);
        
        if (!post) return res.status(404).json("Post not found");
        
        if (!Array.isArray(post.likes)) {
            post.likes = [];
        }

        const isLiked = post.likes.some((id) => id.toString() === String(userId));

        if (!isLiked) {
            post.likes.push(userId);
        } else {
            post.likes = post.likes.filter((id) => id.toString() !== String(userId));
        }
        await post.save();
        
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
