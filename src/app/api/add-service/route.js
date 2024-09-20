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
        } = reqBody;

        // const service = await Service.findOne({ email });

        // if (user) {
        //     return NextResponse.json({ error: "Given email already linked with another account. Please try another email." }, { status: 400 });
        // }

        const newService = new Service({
            title,
            subTitle,
            ingredients,
            category,
            price,
            description,
            image,
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