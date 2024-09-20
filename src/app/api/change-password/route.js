import User from "@/models/userModel";
import { connect } from "@/lib/database_config";
import { NextResponse } from "next/server";

connect();

export async function PATCH(request) {
    try {
        const reqBody = await request.json();
        const { email, currentPassword, newPassword, confirmNewPassword } = reqBody;

        if (newPassword !== confirmNewPassword) {
            return NextResponse.json({ error: "Confirm password didn't match with new paswword." }, { status: 400 });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({ error: "User not found." }, { status: 400 });
        }

        if (currentPassword !== user.password) {
            return NextResponse.json({ error: "Current password is incorrect." }, { status: 400 });
        }

        user.password = newPassword;
        await user.save();

        return NextResponse.json({
            message: "Password successfully changed",
            success: true,
        });
        
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
