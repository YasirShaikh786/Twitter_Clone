import express from "express";
import { protectedRoute } from "../middleware/protectedRoute.js";
import { getNotifications, deleteNotifications } from "../controllers/notification_controller.js";

const router = express.Router();

router.get("/all", protectedRoute, getNotifications);
router.delete("/delete", protectedRoute, deleteNotifications);

export default router;  