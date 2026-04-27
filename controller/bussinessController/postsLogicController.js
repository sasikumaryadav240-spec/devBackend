import postModel from "../../Model/post.js";
import User from "../../Model/user.js";

export const getProfilePosts = async (req, res) => {
    const Id = req.userId;
    try {
        const posts = await postModel.find({ userId : Id})
                            .sort({ createdAt : -1 });

        if(!posts) return res.status(404).json("No Posts");

        const profile = await User.find({_id : Id}).select("-password");
        const postsData = posts.map((p) => ({
            ...p._doc,
            Author : profile
        }));

        res.status(200).json({postsData});
    } catch (error) {
        res.status(500).json(error.message);
    }
}

export const getAllPosts = async (req, res) => {
    try {
        const posts = await postModel.find({})
                      .populate("userId", "-password")
                      .sort({ createdAt : -1 });

        if(!posts) return res.status(404).json("No Posts Available");

        res.status(200).json({posts});
    } catch (error) {
        res.status(500).json(error.message);
    }
}