import { NextResponse } from "next/server";
import Service from "@/models/serviceModel";
import { connect } from "@/lib/database_config";

connect();

export async function POST(request) {
    const reqBody = await request.json();
    const { _id } = reqBody;

    const service = await Service.findOne({ _id });

    return NextResponse.json({
        message: "Service found",
        data: service,
    });
}