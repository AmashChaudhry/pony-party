import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber: {
        type: String,
    },
    dateOfBirth: {
        type: Date,
    },
    state: {
        type: String,
    },
    city: {
        type: String,
    },
    address: {
        type: String,
    },
    zipCode: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    verifyToken: {
        type: String,
    },
    verifyTokenExpiry: {
        type: Date,
    },
    resetPasswordToken: {
        type: String,
    },
    resetPasswordTokenExpiry: {
        type: Date,
    },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;