import { NextResponse } from "next/server";
import { connect } from "@/lib/database_config";
import Service from "@/models/serviceModel";

connect();

export async function GET() {
  try {
    const data = await Service.find();
    return NextResponse.json({ Result: data });
  } catch (error) {
    return NextResponse.json({ Error: error });
  }
}