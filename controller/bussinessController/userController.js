import User from "../../Model/user.js";
import postModel from  "../../Model/post.js";

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}).select("-password");

        if(!users || users.length === 0){
            return res.status(404).json({ message: "No users found" });
        }

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getTopContributors = async (req, res) => {
  try {
    const topUsers = await postModel.aggregate([
      {
        $group: {
          _id: "$userId",
          totalPosts: { $sum: 1 }
        }
      },
      {
        $sort: { totalPosts: -1 }
      },
      {
        $limit: 5
      },
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "_id",
          as: "user"
        }
      },
      {
        $unwind: "$user"
      },
      {
        $project: {
          _id: "$user._id",
          name: "$user.name",
          role: "$user.role",
          totalPosts: 1
        }
      }
    ]);

    res.json(topUsers);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export const getSuggestedUsers = async (req, res) => {
  try {
    const myId = req.userId;
    const following = await followModel.find({ followerId: myId });

    const followingIds = following.map(f => f.followedId);

    const suggestions = await User.find({
      _id: { $nin: [...followingIds, myId] }
    }).limit(5);

    res.json(suggestions);

  } catch (err) {
    res.status(500).json(err.message);
  }
};