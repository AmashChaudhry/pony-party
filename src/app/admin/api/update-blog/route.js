import { connect } from "@/lib/mongodb_config";
import { NextResponse } from "next/server";
import Blog from "@/models/blogModel";

connect();

export async function PATCH(request) {
    try {
        const reqBody = await request.json();
        const { _id, title, description, image, subTopics, categories, author, conclusion, published } = reqBody;

        const blog = await Blog.findOne({ _id });
        if (!blog) {
            return NextResponse.json({ error: "Blog not found" }, { status: 400 });
        }

        if (title) blog.title = title;
        if (description) blog.description = description;
        if (image) blog.image = image;
        if (subTopics) blog.subTopics = subTopics;
        if (categories) blog.categories = categories;
        if (author) blog.author = author;
        if (conclusion) blog.conclusion = conclusion;
        if (typeof published === 'boolean') {
            blog.published = published;
        }

        const updatedBlog = await blog.save();
        console.log(updatedBlog);

        return NextResponse.json({
            message: "Blog updated successfully",
            success: true,
            updatedBlog,
        });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
