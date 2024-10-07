import { connect } from "@/lib/mongodb_config";
import { NextResponse } from "next/server";
import Service from "@/models/serviceModel";

connect();

export async function PATCH(request) {
    try {
        const reqBody = await request.json();
        const { _id, title, subTitle, ingredients, effects, category, price, description, image, icon, uses } = reqBody;

        const service = await Service.findOne({ _id });
        if (!service) {
            return NextResponse.json({ error: "Service not found" }, { status: 400 });
        }

        if (title) service.title = title;
        if (subTitle) service.subTitle = subTitle;
        if (ingredients) service.ingredients = ingredients;
        if (effects) service.effects = effects;
        if (category) service.category = category;
        if (price) service.price = price;
        if (description) service.description = description;
        if (image) service.image = image;
        if (icon) service.icon = icon;
        if (uses) service.uses = uses;

        const updatedService = await service.save();
        console.log(updatedService);

        return NextResponse.json({
            message: "Service updated successfully",
            success: true,
            updatedService,
        });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
