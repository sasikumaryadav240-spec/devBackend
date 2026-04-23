import postModel from "../../Model/post.js";

export const getProfilePosts = async (req, res) => {
    const Id = req.userId;
    try {
        const posts = await postModel.find({ userId : Id})
                            .sort({ createdAt : -1 });

        if(!posts) return res.status(404).json("No Posts");

        res.status(200).json({posts});
    } catch (error) {
        res.status(500).json(error.message);
    }
}

export const getAllPosts = async (req, res) => {
    try {
        const posts = await postModel.find({})
                      .sort({ createdAt : -1 });

        if(!posts) return res.status(404).json("No Posts Available");

        res.status(200).json({posts});
    } catch (error) {
        res.status(500).json(error.message);
    }
}