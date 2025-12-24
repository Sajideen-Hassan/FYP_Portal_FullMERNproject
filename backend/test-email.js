// backend/test-email.js
const nodemailer = require("nodemailer");
require("dotenv").config();

async function testEmail() {
    console.log("Testing email with user:", process.env.EMAIL_USER);

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Send to self
        subject: "Test OTP Email",
        text: "If you receive this, your email configuration is correct.",
    };

    try {
        console.log("Attempting to send mail...");
        const info = await transporter.sendMail(mailOptions);
        console.log("✅ Email sent successfully:", info.response);
    } catch (error) {
        console.error("❌ Email sending failed:");
        console.error(error);
    }
}

testEmail();
