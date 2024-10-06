import { connect } from "@/lib/mongodb_config";
import { NextResponse } from "next/server";
import Blog from "@/models/blogModel";

connect();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const {
            title,
            description,
            image,
            subTopics,
            categories,
            author,
            conclusion,
        } = reqBody;

        console.log("Sub-Topics Array:", subTopics);

        const newBlog = new Blog({
            title,
            description,
            image,
            subTopics,
            categories,
            author,
            conclusion,
        });

        const savedBlog = await newBlog.save();
        console.log(savedBlog);

        return NextResponse.json({
            message: "Blog uploaded successfully",
            success: true,
            savedBlog,
        });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}