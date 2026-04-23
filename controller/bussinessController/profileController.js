import User from "../../Model/user.js";

export const getProfile = async (req, res) => {
    const Id = req.userId;
    try {
        const user = await User.find({_id : Id}).select("-password");

        if(!user) return res.status(404).json("No User Data Found");

        res.status(200).json({
            profile : {user}
        });
    } catch (error) {
        res.status(500).json(error.message);
    }
}

export const updateProfile = async (req, res) => {
    const Id = req.userId;
    try {
        const user = await User.findOneAndUpdate(
            {_id : Id},
            req.body,
            {new: true}
        );

        if(!user) return res.status(404).json("No User Data Found");

        res.status(200).json({
            profile : {user},
            status : "SuccessFully updated Profile"
        });
    } catch (error) {
        res.status(500).json(error.message);
    }
}

export const deleteProfile = async (req, res) => {
    const Id = req.userId;
    try {
        const user = await User.findOneAndDelete({_id : Id});

        if(!user) return res.status(404).json("No User Data Found");

        res.status(200).json({
            Status : "Profile Deleted"
        });
    } catch (error) {
        res.status(500).json(error.message);
    }
}