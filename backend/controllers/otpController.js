// controllers/otpController.js

const nodemailer = require("nodemailer");
const otpStore = new Map(); // Store OTPs temporarily in memory

// Send OTP
exports.sendOtp = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: "Email is required" });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpStore.set(email, otp); // Save to store

    // Transporter using Gmail + App Password
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // from .env
        pass: process.env.EMAIL_PASS,
      },
    });

    // Mail options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP is ${otp}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    console.error("❌ Error sending OTP:", error.message);
    res.status(500).json({ error: "Failed to send OTP" });
  }
};

// Verify OTP
exports.verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) return res.status(400).json({ error: "Email and OTP required" });

    const savedOtp = otpStore.get(email);
    if (savedOtp === otp) {
      otpStore.delete(email); // Optional: clear OTP after verification
      res.status(200).json({ message: "OTP verified successfully" });
    } else {
      res.status(400).json({ error: "Invalid OTP" });
    }
  } catch (error) {
    console.error("❌ Error verifying OTP:", error.message);
    res.status(500).json({ error: "Failed to verify OTP" });
  }
};
