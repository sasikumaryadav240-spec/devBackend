import mongoose from "mongoose";

const follow = new mongoose.Schema({
  followerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  followedId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
}, {
  timestamps: true,
  versionKey: false
});

follow.index({ followerId: 1, followedId: 1 }, { unique: true });

const followModel = mongoose.model("followers", follow);

export default followModel;