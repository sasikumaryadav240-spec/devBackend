export const toggleLike = async (req, res) => {
    const { id } = req.params;
    const userId = req.userId;

    try {
        const post = await postModel.findById(id);
        
        const isLiked = post.likes.includes(userId);

        if (isLiked) {
            post.likes = post.likes.filter((uid) => uid.toString() !== userId);
        } else {
            post.likes.push(userId);
        }

        await post.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
