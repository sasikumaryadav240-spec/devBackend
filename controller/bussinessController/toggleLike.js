import postModel from "../../Model/post.js";

export const toggleLike = async (req, res) => {
    try {
        const postId = req.params.id;
        const userId = req.userId;

        const post = await postModel.findById(postId);
        if (!post) return res.status(404).json("Post not found");
        const index = post.likes.findIndex((id) => id.toString() === String(userId));

        if (index === -1) {
            post.likes.push(userId);
        } else {
            post.likes = post.likes.filter((id) => id.toString() !== String(userId));
        }

        const updatedPost = await postModel.findByIdAndUpdate(postId, post, { new: true });
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
