import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const connectMongoDB = async () => {
	try {	
		const conn = await mongoose.connect(process.env.MONGO_URI);

		console.log(`Connected to database: ${conn.connection.name}`);
		console.log(`Database Port: ${conn.connection.port}`);
	} catch (error) {
		console.error(`Error connecting to MongoDB: ${error.message}`);
		process.exit(1);
	}
};

export default connectMongoDB;