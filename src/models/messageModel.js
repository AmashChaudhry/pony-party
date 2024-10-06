import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    sendAt: {
        type: Date,
        default: Date.now,
    },
});

const Message = mongoose.models.Message || mongoose.model("Message", messageSchema);
export default Message;