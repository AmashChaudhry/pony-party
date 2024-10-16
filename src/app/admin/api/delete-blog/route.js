import { deleteImage } from "@/helpers/upload-image";
import { connect } from "@/lib/mongodb_config";
import Blog from "@/models/blogModel";
import { NextResponse } from "next/server";

connect();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { id } = reqBody;

        const blog = await Blog.findOne({ _id: id });

        if (!blog) {
            return NextResponse.json({ error: "Blog not found" }, { status: 400 });
        }

        const publicIdsToDelete = [blog.image.publicId];
        if (blog.subTopics && blog.subTopics.length > 0) {
            blog.subTopics.forEach(subTopic => {
                if (subTopic.image && subTopic.image.publicId) {
                    publicIdsToDelete.push(subTopic.image.publicId);
                }
            });
        }

        for (const publicId of publicIdsToDelete) {
            await deleteImage(publicId);
        }

        await Blog.findByIdAndDelete(id);

        return NextResponse.json({
            message: "Blog successfully deleted",
            success: true,
        });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
