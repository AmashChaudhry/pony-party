// import User from "@/models/userModel";
// import { connect } from "@/lib/mongodb_config";
// import { NextResponse } from "next/server";
// import { getDataFromToken } from "@/helpers/getDataFromToken";

// connect();

// export async function GET(request) {
//     const userId = await getDataFromToken(request);
//     const user = await User.findOne({_id: userId}).select("-password");
//     return NextResponse.json({
//         message: "User found",
//         data: user,
//     });
// }


import User from "@/models/userModel";
import { connect } from "@/lib/mongodb_config";
import { NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";

connect();

export async function GET(request) {
    try {
        const userId = await getDataFromToken(request);

        const user = await User.findOne({ _id: userId }).select("-password");

        if (!user) {
            return NextResponse.json(
                { message: "User not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            message: "User found",
            data: user,
        });
    } catch (error) {
        return NextResponse.json(
            { message: error.message || "An error occurred" },
            { status: 500 }
        );
    }
}
