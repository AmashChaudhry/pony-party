import User from "@/models/userModel";
import { NextResponse } from "next/server";
import { connect } from "@/lib/mongodb_config";
import { adminVerification } from "@/helpers/mailer";

connect();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { userId } = reqBody;

        const user = await User.findOne({ _id: userId });

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 400 });
        }

        if(!user.isAdmin && !user.isVerified) {
            return NextResponse.json({ error: "User is not admin" }, { status: 400 });
        }

        console.log(user.email);

        await adminVerification({email: user.email, userId});

        // const adminTokenData = {
        //     id: user._id,
        //     otp: otp,
        // }

        // const adminToken = jwt.sign(adminTokenData, process.env.TOKEN_SECRET, {
        //     expiresIn: '1d',
        // });

        // response.cookies.set("adminToken", adminToken, {
        //     httpOnly: true,
        // });

        return NextResponse.json({
            message: "Admin verification OTP successfully sent",
            success: true,
        });

    } catch (error) {
        return Response.NextResponse.json({ error: error.message }, { status: 500 });
    }
}