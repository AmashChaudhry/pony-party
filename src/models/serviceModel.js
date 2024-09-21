import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    subTitle: {
        type: String,
        required: true,
    },
    ingredients: {
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
    },
    image: {
        type: String,
    },
    uses: [
        {
            name: {
                type: String,
                required: true,
            },
            icon: {
                type: String,
                required: true,
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