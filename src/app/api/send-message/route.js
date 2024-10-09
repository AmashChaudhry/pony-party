import nodemailer from 'nodemailer';
import { NextResponse } from "next/server";
import Message from "@/models/messageModel";
import { connect } from "@/lib/mongodb_config";

connect();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { city, category, firstName, lastName, phoneNumber, email, message } = reqBody;

        const newMessage = new Message({
            city,
            category,
            firstName,
            lastName,
            phoneNumber,
            email,
            message,
        });

        const sentMessage = await newMessage.save();
        console.log(sentMessage);

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SENDER_MAIL,
                pass: process.env.SENDER_MAIL_PASS_KEY,
            },
        });

        const mailOptions = {
            from: `"Pony Party" <${process.env.SENDER_MAIL}>`,
            to: process.env.HOST_MAIL,
            subject: `Contact Form Submission from ${firstName} ${lastName}`,
            html: `
            <div style="padding: 20px; background-color: #FFA9F91A;">
                <div style="text-align: center; margin-bottom: 20px;">
                    <img src="https://ponypartyiv.com/Logo-2.png" alt="Pony Party" style="width: auto; height: 100px;" />
                </div>
                <h1 style="font-weight: 300; margin-bottom: 10px;">Pony Party IV</h1>
                <h2 style="font-weight: 300; margin: 0;">CONTACT US</h2>
                <p style="font-size: 14px; font-weight: 300; margin-bottom: 10px;">ponypartyiv.com</p>
                <p style="font-size: 14px; font-weight: 600; margin-bottom: 20px;">Message from guest account.</p>
                <p style="font-size: 14px; font-weight: 300; margin-bottom: 10px;"><strong>Category:</strong> ${category}</p>
                <p style="font-size: 16px; font-weight: 300; margin-bottom: 20px;">${message}</p>
                <p style="font-size: 14px; font-weight: 300; margin: 0;"><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p style="font-size: 14px; font-weight: 300; margin: 0;"><strong>City:</strong> ${city}</p>
                <p style="font-size: 14px; font-weight: 300; margin: 0;"><strong>Phone No.:</strong> +1${phoneNumber}</p>
                <p style="font-size: 14px; font-weight: 300; margin: 0;"><strong>Email:</strong> ${email}</p>
            </div>
        `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({
            message: "Message successfully sent",
            success: true,
            sentMessage,
        }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}