import express from "express";
const router = express.Router();
import { commentsperPosts } from "../controller/bussinessController/commentsLogicController.js";

router.get("/commentsPerPost/:id", commentsperPosts);

export default router;