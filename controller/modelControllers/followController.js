import followModel from "../../Model/follow.js";

export const addFollowRequest = async (req, res) => {
    const Id = req.userId;
    const targetId = req.params.id;
    try {
        const follower = await followModel.create({
            followerId : Id,
            followedId : targetId
        });
        res.status(201).json(follower);
    } catch (error) {
        if (error.code === 11000) {
        return res.status(400).json("Already following this user");
        }
        res.status(500).json(error.message);  
    }
}

export const removeFollowRequest = async (req, res) => {
    const Id = req.userId;
    const targetId = req.params.id;
    try {
        const removeFollower = await followModel.findOneAndDelete({
            followedId: targetId,
            followerId : Id
        });

        if(!removeFollower) return res.status(404).json("Request Not Approved");

        res.status(200).json("Unfollowed successfully");
    } catch (error) {
        res.status(500).json(error.message);   
    }
}