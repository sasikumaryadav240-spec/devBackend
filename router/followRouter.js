import express from "express";
const router = express.Router();
import { addFollowRequest, removeFollowRequest } from "../controller/modelControllers/followController.js";

router.post("/addFollower/:id", addFollowRequest);
router.delete("/removeFollower/:id", removeFollowRequest);

export default router;