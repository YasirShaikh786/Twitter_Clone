import express from "express";
import { protectedRoute } from "../middleware/protectedRoute.js";
import {
	commentOnPost,
	createPost,
	deletePost,
	getAllPosts,
	getFollowingPosts,
	getLikedPosts,
	getUserPosts,
	likeUnlikePost,
} from "../controllers/post_controller.js";

const router = express.Router();

router.get("/all", protectedRoute, getAllPosts);              // Get all posts
router.get("/following", protectedRoute, getFollowingPosts);  // Get following posts
router.get("/likes/:id", protectedRoute, getLikedPosts);      // Get liked posts
router.get("/user/:username", protectedRoute, getUserPosts);  // Get user posts
router.post("/create", protectedRoute, createPost);           // Create post
router.post("/like/:id", protectedRoute, likeUnlikePost);    // Like/unlike post
router.post("/comment/:id", protectedRoute, commentOnPost);  // Comment on post
router.delete("/:id", protectedRoute, deletePost);            // Delete post

export default router;