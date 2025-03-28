import { uploadImage } from "@/helpers/upload-image";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const formData = await request.formData();
        const image = formData.get('image');
        const path = formData.get('path');

        if (!image) {
            return NextResponse.json({ message: 'No image Selected' }, { status: 400 });
        }

        const imageData = await uploadImage(image, path);

        return NextResponse.json({data: imageData}, {status: 201});

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}