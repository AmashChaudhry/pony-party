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
        type: String,
        required: true,
    },
    icon: {
        type: String,
    },
    uses: [
        {
            name: {
                type: String,
            },
            icon: {
                type: String,
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