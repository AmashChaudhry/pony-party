import { NextResponse } from "next/server";
import Message from "@/models/messageModel";
import { connect } from "@/lib/mongodb_config";

connect();

export async function POST() {
  try {
    const messages = await Message.find();
    return NextResponse.json({
      message: "Messages found",
      data: messages
    });
  } catch (error) {
    return NextResponse.json({ Error: error });
  }
}