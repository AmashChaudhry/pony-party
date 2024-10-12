import User from "@/models/userModel";
import { connect } from "@/lib/mongodb_config";
import { NextResponse } from "next/server";

connect();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { token, newPassword, confirmPassword } = reqBody;

        const user = await User.findOne({ resetPasswordToken: token, resetPasswordTokenExpiry: {$gt: Date.now() } })

        if(!user) {
            return NextResponse.json({ error: 'Reset password request is not valid' }, { status: 400 });
        }

        if(newPassword !== confirmPassword) {
            return NextResponse.json({ error: 'Confirm password did not match with new password' }, { status: 400 });
        }

        user.password = newPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordTokenExpiry = undefined;

        await user.save();

        return NextResponse.json({
            message: 'Password reset successfully.',
            success: true,
        }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

}