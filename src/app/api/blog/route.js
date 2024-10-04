import { NextResponse } from "next/server";
import { connect } from "@/lib/mongodb_config";
import Blog from "@/models/blogModel";

connect();

export async function POST(request) {
    const reqBody = await request.json();
    const { _id } = reqBody;

    const blog = await Blog.findOne({ _id });

    return NextResponse.json({
        message: "Blog found",
        data: blog,
    });
}