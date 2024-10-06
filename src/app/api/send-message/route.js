import { connect } from "@/lib/mongodb_config";
import { NextResponse } from "next/server";
import Message from "@/models/messageModel";

connect();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const {
            city,
            category,
            firstName,
            lastName,
            phoneNumber,
            email,
            message,
        } = reqBody;

        const newMessage = new Message({
            city,
            category,
            firstName,
            lastName,
            phoneNumber,
            email,
            message,
        });

        const sentMessage = await newMessage.save();
        console.log(sentMessage);

        return NextResponse.json({
            message: "Message successfully sent",
            success: true,
            sentMessage,
        });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}