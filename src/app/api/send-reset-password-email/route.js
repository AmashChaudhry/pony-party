import User from "@/models/userModel";
import { NextResponse } from "next/server";
import { connect } from "@/lib/mongodb_config";
import { resetPassword } from "@/helpers/mailer";

connect();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { email } = reqBody;

        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({ error: "This email address is not linked with any account." }, { status: 400 });
        }

        await resetPassword({email, userId: user._id});

        return NextResponse.json({
            message: "Password reset email successfully sent",
            success: true,
        });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}