import postModel from "../../Model/post.js";

export const toggleLike = async (req, res) => {
  const userId = req.userId;
  const postId = req.params.id;

  try {
    const post = await postModel.findById(postId);

    if (!post) return res.status(404).json("Post not found");

    const alreadyLiked = post.likedBy.some(
       (id) => id.toString() === userId
    );

    if (alreadyLiked) {
      post.likedBy.pull(userId);
      post.likes -= 1;
    } else {
      post.likedBy.push(userId);
      post.likes += 1;
    }

    await post.save();

    res.json({
      likes: post.likes,
      liked: !alreadyLiked
    });

  } catch (err) {
    res.status(500).json(err.message);
  }
};