import { connect } from "@/lib/mongodb_config";
import { NextResponse } from "next/server";
import { verifyEmail } from "@/helpers/mailer";

connect();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { email, userId } = reqBody;

        console.log(email, userId);

        await verifyEmail({email, userId: userId});

        return NextResponse.json({
            message: "Email verification successfully sent",
            success: true,
        });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}