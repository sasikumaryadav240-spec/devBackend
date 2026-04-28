import mongoose from "mongoose";
import postModel from "../../Model/post.js";

export const createPost = async (req, res) => {
    const Id = req.userId;
    try {
        const { header, idea } = req.body;

        const post = await postModel.create({
            userId : Id,
            header,
            idea,
            likes: 0
        });

        res.status(201).json(post);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

export const updatePost = async (req, res) => {
    try {
        const { header, idea, likes} = req.body;

        const updatePost = await postModel.findOneAndUpdate(
            { _id: req.params.id }, 
            { $inc: { 
                likes: likes || 0
                    },
                $set : {
                    header,
                    idea
                }
            }, 
            { returnDocument: 'after' }
        );

        if(!updatePost) return res.status(404).json("Post Not Found")

        res.status(201).json(updatePost);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

export const deletePost = async (req, res) => {
    try {
        const deletePost = await postModel.findOneAndDelete(
            {_id : req.params.id}
        );

        if(!deletePost) return res.status(404).json("Post Not Found")

        res.status(201).json(deletePost);
    } catch (error) {
        res.status(500).json(error.message);
    }
}