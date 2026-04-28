import { number } from "joi";
import mongoose from "mongoose";

const post = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    header : {
        type: String,
        minlength : 5,
        maxlength : 100,
        required: true,
    },
    idea : {
        type: String,
        minlength: 20,
        required: true
    },
    likes : {
        type : number,
    }
},{
    timestamps: true,
    versionKey:false
})

const postModel = mongoose.model("Posts", post);

export default postModel;