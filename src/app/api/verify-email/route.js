import User from "@/models/userModel";
import { connect } from "@/lib/mongodb_config";
import { NextResponse } from "next/server";

connect();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { token } = reqBody;

        const user = await User.findOne({ verifyToken: token, verifyTokenExpiry: {$gt: Date.now() } })

        if(!user) {
            return NextResponse.json({ error: 'Invalid token' }, { status: 400 });
        }

        user.isVerified = true;
        user.verifyToken = undefined;
        user.verifyTokenExpiry = undefined;

        await user.save();

        return NextResponse.json({
            message: 'Email verified successfully',
            success: true,
        }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

}