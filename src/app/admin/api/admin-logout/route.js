import { NextResponse } from "next/server";
import { connect } from "@/lib/mongodb_config";

connect();

export async function POST(request) {
    try {
        const response = NextResponse.json({
            message: "Logout successfully",
            success: true,
        });

        response.cookies.set("adminToken", "", {
            httpOnly: true,
            expires: new Date(0),
        });

        return response;

    } catch (error) {
        return Response.NextResponse.json({error: error.message}, {status: 500});
    }
}