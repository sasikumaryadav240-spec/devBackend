import express from "express";
const router = express.Router();

import { createComment } from "../controller/modelControllers/commentsController.js";

router.post("/comment/:id", createComment);

export default router;