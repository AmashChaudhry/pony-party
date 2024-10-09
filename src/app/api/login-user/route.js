import User from "@/models/userModel";
import { connect } from "@/lib/mongodb_config";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

connect();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { email, password, rememberMe } = reqBody;

        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({ error: "This email address is not registered." }, { status: 400 });
        }

        if (password != user.password) {
            return NextResponse.json({ error: "Incorrect password" }, { status: 400 });
        }

        const tokenData = {
            id: user._id,
            isAdmin: user.isAdmin,
        }

        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET, {
            expiresIn: '3d',
        });

        const response = NextResponse.json({
            message: "Logged in successfully",
            success: true,
        });

        const cookieMaxAge = rememberMe ? 60 * 60 * 24 * 3 : undefined;

        response.cookies.set("token", token, {
            httpOnly: true,
            maxAge: cookieMaxAge,
            sameSite: 'lax',
            secure: process.env.NODE_ENV === 'production',
        });

        return response;

    } catch (error) {
        return Response.NextResponse.json({ error: error.message }, { status: 500 });
    }
}