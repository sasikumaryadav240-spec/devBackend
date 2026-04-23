import mongoose from "mongoose";

const commentModel = mongoose.Schema({
    postId : {
        type: String,
        required: true
    },
    userId : {
        type: String,
        required: true
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