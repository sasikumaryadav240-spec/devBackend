import mongoose from "mongoose";

const post = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    header: {
        type: String,
        minlength: 5,
        maxlength: 100,
        required: true,
        trim: true
    },
    idea: {
        type: String,
        minlength: 20,
        required: true,
        trim: true
    },
    likes : {
        type : Number,
        default: 0
    },
    likedBy: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
    ]
},{
    timestamps: true,
    versionKey:false
})

const postModel = mongoose.model("Posts", post);

export default postModel;