import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    subTitle: {
        type: String,
    },
    ingredients: {
        type: String,
    },
    effects: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
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
    icon: {
        url: { type: String },
        publicId: { type: String },
    },
    uses: [
        {
            name: {
                type: String,
            },
            icon: {
                url: { type: String },
                publicId: { type: String },
            },
        },
    ],
    isAvailableForPurchase: {
        type: Boolean,
        default: true,
    },
});

const Service = mongoose.models.Service || mongoose.model("Service", serviceSchema);
export default Service;