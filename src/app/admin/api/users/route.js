import User from "@/models/userModel";
import { NextResponse } from "next/server";
import { connect } from "@/lib/mongodb_config";

connect();

export async function POST() {
  try {
    const users = await User.find().select('-password');
    return NextResponse.json({
      message: "Users found",
      data: users
    });
  } catch (error) {
    return NextResponse.json({ Error: error });
  }
}