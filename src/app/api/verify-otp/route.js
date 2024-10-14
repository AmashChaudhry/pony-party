import jwt from "jsonwebtoken";
import User from "@/models/userModel";
import { connect } from "@/lib/mongodb_config";
import { NextResponse } from "next/server";

connect();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { otp, userId } = reqBody;

        const user = await User.findOne({ _id: userId, adminOtpExpiry: { $gt: Date.now() } });

        if (!user) {
            return NextResponse.json({ error: 'OTP expired' }, { status: 400 });
        }

        if (otp !== user.adminOtp) {
            return NextResponse.json({ error: 'Invalid OTP' }, { status: 400 });
        }

        const adminTokenData = {
            id: user._id,
            otp: otp,
        }

        const adminToken = jwt.sign(adminTokenData, process.env.TOKEN_SECRET, {
            expiresIn: '1d',
        });

        const response = NextResponse.json({
            message: "OTP verified successfully",
            success: true,
        });

        response.cookies.set("adminToken", adminToken, {
            httpOnly: true,
        });

        user.adminOtp = undefined;
        user.adminOtpExpiry = undefined;

        await user.save();

        return response;

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

}