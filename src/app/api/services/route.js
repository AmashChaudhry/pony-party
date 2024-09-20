import { NextResponse } from "next/server";
import { connect } from "@/lib/database_config";
import Service from "@/models/serviceModel";

connect();

export async function GET() {
  try {
    const services = await Service.find();
    return NextResponse.json({
      message: "Services found",
      data: services
    });
  } catch (error) {
    return NextResponse.json({ Error: error });
  }
}