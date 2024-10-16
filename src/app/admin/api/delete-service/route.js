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

        if (!service) {
            return NextResponse.json({ error: "Service not found" }, { status: 400 });
        }

        const publicIdsToDelete = [service.image.publicId];
        if (service.icon && service.icon.publicId) {
            publicIdsToDelete.push(service.icon.publicId);
        }
        if (service.uses && service.uses.length > 0) {
            service.uses.forEach(use => {
                if (use.icon && use.icon.publicId) {
                    publicIdsToDelete.push(use.icon.publicId);
                }
            });
        }

        for (const publicId of publicIdsToDelete) {
            await deleteImage(publicId);
        }

        await Service.findByIdAndDelete(id);

        return NextResponse.json({
            message: "Service successfully deleted",
            success: true,
        });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
