import express from "express";
const router = express.Router();
import { getAllPosts, getProfilePosts } from "../controller/bussinessController/postsLogicController.js";

router.get("/profilePosts", getProfilePosts);
router.get("/getAllPosts", getAllPosts);

export default router;