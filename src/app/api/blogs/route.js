import { NextResponse } from "next/server";
import { connect } from "@/lib/mongodb_config";
import Blog from "@/models/blogModel";

connect();

export async function GET() {
  try {
    const blogs = await Blog.find();
    return NextResponse.json({
      message: "Blogs found",
      data: blogs
    });
  } catch (error) {
    return NextResponse.json({ Error: error });
  }
}