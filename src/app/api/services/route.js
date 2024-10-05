import { NextResponse } from "next/server";
import { connect } from "@/lib/mongodb_config";
import Service from "@/models/serviceModel";

connect();

export async function GET() {
  try {
    const services = await Service.find();
    const response = NextResponse.json({
      message: "Services found",
      data: services
    });

    response.headers.set('Cache-Control', 'no-store, max-age=0');

    return response;
    
  } catch (error) {
    return NextResponse.json({ Error: error });
  }
}