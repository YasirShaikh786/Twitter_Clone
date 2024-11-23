import User from "../models/user_model.js";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

export const protectedRoute = async (req, res, next) => {
	try {
		const token = req.cookies.jwt;						// Get token from cookies 
		if (!token) {
			return res.status(401).json({ error: "Unauthorized: No Token Provided" });
		}

		const decoded = jwt.verify(token, process.env.JWT_SECRET);		// Verify token

		if (!decoded) {
			return res.status(401).json({ error: "Unauthorized: Invalid Token" });
		}

		const user = await User.findById(decoded.userId).select("-password");		// Find user

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		req.user = user;											// Set user in request		
		next(); 													// Call next middleware							
	} catch (err) {
		console.log("Error in protectRoute middleware", err.message);
		return res.status(500).json({ error: "Internal Server Error" });
	}
};