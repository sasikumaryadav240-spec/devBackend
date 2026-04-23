import express from "express";
const router = express.Router();
import { follersPosts, followersCount } from "../controller/bussinessController/followLogicController.js";

router.get("/followingPosts", follersPosts);
router.get("/followingCount", followersCount);

export default router;