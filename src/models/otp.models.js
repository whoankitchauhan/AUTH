import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please provide an email"],
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Please provide a user ID"],
    },
    otp: {
        type: String,
        required: [true, "Please provide an OTP"],
    },
    otpHash: {
        type: String,
        required: [true, "Please provide an OTP hash"],
    },
    optHash: {
        type: String,
    }
}, {
    timestamps: true
}
);

const otpModel = mongoose.model("Otp", otpSchema);

export default otpModel;
