import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		fullName: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
			minLength: 6,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		followers: [
			{
				type: mongoose.Schema.Types.ObjectId,   // followers is an array of user ids
				ref: "User",                            // reference to the User model as followers are users
				default: [],                            // will have 0 followers by default
			},
		],
		following: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",   
				default: [],
			},
		],
		profileImg: {
			type: String,        // path to the profile image stored in cloudinary in string format 
			default: "",
		},
		coverImg: {
			type: String,       // path to the cover image stored in cloudinary in string format
			default: "",
		},
		bio: {
			type: String,
			default: "",
		},

		link: {
			type: String,
			default: "",
		},
		likedPosts: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Post",
				default: [],
			},
		],
	},
	{ timestamps: true }  // used to get createdAt and updatedAt
);

const User = mongoose.model("User", userSchema);

export default User;