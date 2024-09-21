import { connect } from "@/lib/database_config";
import { NextResponse } from "next/server";
import Service from "@/models/serviceModel";

connect();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const {
            title,
            subTitle,
            ingredients,
            category,
            price,
            description,
            image,
            uses,
        } = reqBody;

        console.log("Uses Array:", uses);

        const newService = new Service({
            title,
            subTitle,
            ingredients,
            category,
            price,
            description,
            image,
            uses,
        });

        const savedService = await newService.save();
        console.log(savedService);

        return NextResponse.json({
            message: "Service added successfully",
            success: true,
            savedService,
        });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}