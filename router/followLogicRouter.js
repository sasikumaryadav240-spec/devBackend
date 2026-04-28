import express from "express";
const router = express.Router();
import { follersPosts, followersCount, follwersList} from "../controller/bussinessController/followLogicController.js";

router.get("/followingPosts", follersPosts);
router.get("/followingList", follwersList);
router.get("/followingCount", followersCount);

export default router;