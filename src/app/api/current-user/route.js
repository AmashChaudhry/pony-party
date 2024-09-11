import User from "@/models/userModel";
import { connect } from "@/lib/database_config";
import { NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";

connect();

export async function GET(request) {
    const userId = await getDataFromToken(request);
    const user = await User.findOne({_id: userId}).select("-password");
    return NextResponse.json({
        message: "User found",
        data: user,
    });
}