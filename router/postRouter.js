import express from "express";
const router  = express.Router();
import { createPost, updatePost, deletePost } from "../controller/modelControllers/postsController.js";

router.post("/post", createPost);
router.put("/post/:id", updatePost);
router.delete("/post/:id", deletePost);

export default router;