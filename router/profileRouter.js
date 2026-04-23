import express from "express";
const router = express.Router();
import { getProfile, updateProfile, deleteProfile } from "../controller/bussinessController/profileController.js";

router.get("/profile", getProfile);
router.put("/profile/:id", updateProfile);
router.delete("/profile/:id", deleteProfile);

export default router;