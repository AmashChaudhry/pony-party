import User from '@/models/userModel';
import nodemailer from 'nodemailer';
import jwt from "jsonwebtoken";

export const verifyEmail = async ({ email, userId }) => {

    const tokenData = {
        id: userId,
    }

    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET, {
        expiresIn: '3d',
    });

    await User.findByIdAndUpdate(userId, {
        $set: {
            verifyToken: token,
            verifyTokenExpiry: Date.now() + 60000,
        }
    });

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SENDER_MAIL,
            pass: process.env.SENDER_MAIL_PASS_KEY,
        },
    });

    const mailOptions = {
        from: `"Pony Party" <${process.env.SENDER_MAIL}>`,
        to: email,
        subject: `Pony Party - Verify your email`,
        html: `
        <div style="padding: 20px; background-color: #FFA9F91A; text-align: center;">
            <div style="text-align: center; margin-bottom: 20px;">
                <img src="https://ponypartyiv.com/Logo-2.png" alt="Pony Party" style="width: auto; height: 100px;" />
            </div>
            <h1 style="font-weight: 300; margin-bottom: 10px;">VERIFY YOUR EMAIL ADDRESS</h1>
            <p style="font-size: 16px; font-weight: 300; margin-top: 0; margin-bottom: 20px;">To continue setting up your Pony Party account, please verify that this is your email address</p>
            <a href='${process.env.DOMAIN_URL}/pages/verify-email/${token}'>
                <button style="background-color: #000000; color: #ffffff; font-size: 16px; font-weight: 300; border: none; border-radius: 5px; padding: 10px 20px; margin-bottom: 40px; cursor: pointer;">Verify email address</button>
            </a>
            <p style="font-size: 16px; font-weight: 300; margin-top: 0; margin-bottom: 10px;">This link will expires in 60 seconds.</p>
        </div>
    `,
    };

    await transporter.sendMail(mailOptions);
}