import mongoose from "mongoose";

const follow = mongoose.Schema({
    followerId :{
        type : String,
        required: true
    },
    followedId :{
        type : String,
        required: true
    },
},{
    timestamps: true,
    versionKey:false
});

const followModel = mongoose.model("followers", follow);
export default followModel;