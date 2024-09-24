import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connect } from "@/lib/mongodb_config";

const userModel = new mongoose.Schema({
  name: String,
  description: String,
});
const User = mongoose.models.users || mongoose.model("users", userModel);

export async function GET() {
  try {
    connect();
    const data = await User.find();
    return NextResponse.json({ Result: data });
  } catch (error) {
    return NextResponse.json({ Error: error });
  }
}