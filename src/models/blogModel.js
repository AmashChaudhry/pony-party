import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        url: {
            type: String,
            required: true,
        },
        publicId: {
            type: String,
            required: true,
        },
    },
    subTopics: [
        {
            title: {
                type: String,
            },
            description: {
                type: String,
            },
            image: {
                url: { type: String },
                publicId: { type: String },
            },
        },
    ],
    categories: {
        type: [String],
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    conclusion: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    published: {
        type: Boolean,
        default: true,
    },
});

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
export default Blog;