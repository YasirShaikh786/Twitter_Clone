import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import authRoutes from './routes/auth_routes.js'
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();

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

app.use("/api/auth",authRoutes);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
	connectMongoDB();
});





