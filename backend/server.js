// packages
import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { v2 as cloudinary } from 'cloudinary'

// routes
import authRoutes from './routes/auth_routes.js'
import userRoutes from './routes/user_routes.js';
import postRoutes from './routes/post_router.js';

// db
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});



const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json()); // for parsing req.body
app.use(express.urlencoded({ extended: true }));  // for parsing req.body in postman 
app.use(cookieParser()); // for parsing cookies
app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
}));


// routes
app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);  
app.use("/api/posts",postRoutes); 


// server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
	connectMongoDB();
});





