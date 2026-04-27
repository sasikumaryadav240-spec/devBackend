import express from "express";
const router = express.Router();
import { getAllPosts, getProfilePosts } from "../controller/bussinessController/postsLogicController.js";
import { toggleLike } from "../controller/bussinessController/toggleLike.js";

router.get("/profilePosts", getProfilePosts);
router.get("/getAllPosts", getAllPosts);
router.put("/likes/id", toggleLike);

export default router;