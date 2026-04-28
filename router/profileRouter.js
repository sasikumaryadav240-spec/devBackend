import express from "express";
const router = express.Router();
import { getProfile, updateProfile, deleteProfile } from "../controller/bussinessController/profileController.js";
import { getAllUsers } from "../controller/bussinessController/userController.js";

router.get("/profile", getProfile);
router.put("/profile/:id", updateProfile);
router.delete("/profile/:id", deleteProfile);
router.get("/getAllUsers", getAllUsers);

export default router;