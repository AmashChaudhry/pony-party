import { deleteImage } from "@/helpers/upload-image";
import { connect } from "@/lib/mongodb_config";
import Service from "@/models/serviceModel";
import { NextResponse } from "next/server";

connect();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { id } = reqBody;

        const service = await Service.findOne({ _id: id });

        await deleteImage();

        const deletedService = await Service.findByIdAndDelete(id);

        if (!deletedService) {
            return NextResponse.json({ error: "Service not found" }, { status: 400 });
        }

        return NextResponse.json({
            message: "Service successfully deleted",
            success: true,
        });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}