import express from "express";
import { protectedRoute } from "../middleware/protectedRoute.js";
import { followUnfollowUser, getUserProfile,getSuggestedUsers,updateUser } from "../controllers/user_controller.js";

const router = express.Router();

router.get("/profile/:username", protectedRoute, getUserProfile);
router.get("/suggested", protectedRoute, getSuggestedUsers);
router.post("/follow/:id", protectedRoute, followUnfollowUser);
router.post("/update", protectedRoute, updateUser);

export default router;  