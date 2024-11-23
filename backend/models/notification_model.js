import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
	{
		from: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,             //Yes, a notification must have an originator.
		},
		to: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		type: {                         //Specifies the type of notification (e.g., "follow" or "like").
			type: String,
			required: true,
			enum: ["follow", "like"],   //Limits the allowed values to "follow" and "like". Any other value will result in a validation error.
		},
		read: {                         //Indicates whether the notification has been read by the recipient.
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

const Notification = mongoose.model("Notification", notificationSchema);

export default Notification;