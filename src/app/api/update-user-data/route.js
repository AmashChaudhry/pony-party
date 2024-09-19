import User from "@/models/userModel";
import { connect } from "@/lib/database_config";
import { NextResponse } from "next/server";

connect();

export async function PATCH(request) {
    try {
        const reqBody = await request.json();
        const { email, firstName, lastName, phoneNumber, dateOfBirth } = reqBody;

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: "User not found with this email." }, { status: 400 });
        }

        if (firstName) user.firstName = firstName;
        if (lastName) user.lastName = lastName;
        if (phoneNumber) user.phoneNumber = phoneNumber;
        if (dateOfBirth) user.dateOfBirth = dateOfBirth;

        const updatedUser = await user.save();
        console.log(updatedUser);

        return NextResponse.json({
            message: "User updated successfully",
            success: true,
            updatedUser,
        });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
