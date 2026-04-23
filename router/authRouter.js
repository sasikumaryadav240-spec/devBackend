import express from "express";
const router = express.Router();

import { login, signIn} from "../controller/modelControllers/authController.js";

router.post("/signin", signIn);
router.post("/login", login);

export default router;