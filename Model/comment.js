import mongoose from "mongoose";

const commentModel = mongoose.Schema({
    postId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Posts"
    },
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    comment: {
        type: String,
        maxlength : 500,
        required: true
    }
},{
    timestamps: true,
    versionKey:false
});

const commentsModel = mongoose.model("comments", commentModel)
export default commentsModel;