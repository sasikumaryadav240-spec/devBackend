import followModel from "../../Model/follow.js";
import postModel from "../../Model/post.js";

export const follersPosts = async (req, res) => {
    const Id = req.userId;
    try {
        const getUserIds = await followModel.find({ followerId : Id });

        const getAllId = getUserIds.map(p => p.followedId);

        const posts = await postModel.find({
            userId : { $in : getAllId }
        }).sort({ createdAt : -1 }).populate("userId", "name role createdAt");

        if(!posts) return res.status(404).json("No Following Accounts posts Found");

        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

export const followersCount = async (req, res) => {
    const Id = req.userId;
    try {
        const getUserIds = await followModel.find({ followerId : Id });

        const getAllId = getUserIds.map(p => p.followedId);

        const lengthOfCount = getAllId.length;

        res.status(200).json(lengthOfCount);
    } catch (error) {
        res.status(500).json(error.message);
    }
}