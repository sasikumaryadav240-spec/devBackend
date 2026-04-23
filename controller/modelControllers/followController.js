import followModel from "../../Model/follow.js";

export const addFollowRequest = async (req, res) => {
    const Id = req.userId;
    try {
        const { followedId } = req.body;

        const follower = await followModel.create({
            followerId : Id,
            followedId : followedId
        });

        if(!follower) return res.status(403).json("Follow Request Not Created");

        res.status(201).json(follower);
    } catch (error) {
        res.status(500).json(error.message);   
    }
}

export const removeFollowRequest = async (req, res) => {
    const Id = req.userId;
    try {
        const removeFollower = await followModel.findOneAndDelete({
            followedId: req.params.id,
            followerId : Id
        });

        if(!removeFollower) return res.status(403).json("Request Not Approved");

        res.status(201).json(removeFollower);
    } catch (error) {
        res.status(500).json(error.message);   
    }
}