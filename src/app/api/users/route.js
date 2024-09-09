import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionString } from "@/lib/database";

const userModel = new mongoose.Schema({
  name: String,
  description: String,
});
const User = mongoose.models.users || mongoose.model("users", userModel);

export async function GET() {
  try {
    await mongoose.connect(connectionString);
    const data = await User.find();
    return NextResponse.json({ result: data });
  } catch (error) {
    return NextResponse.json({ error: "An error occurred" });
  }
}
