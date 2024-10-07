import { deleteImage } from "@/helpers/upload-image";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        
        const reqBody = await request.json();
        const { publicId } = reqBody;

        const deleteResult = await deleteImage(publicId);

        return NextResponse.json({data: deleteResult}, {status: 201});

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}