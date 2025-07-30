// src/pages/VerifyOtpPage.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./OtpPage.scss"; // Keep your custom styling

const OtpPage = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const email = localStorage.getItem("otpEmail");

  const handleChange = (value, index) => {
    if (/^\d$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input
      if (value !== "" && index < 5) {
        const next = document.getElementById(`otp-${index + 1}`);
        if (next) next.focus();
      }
    }
  };

  const handleVerify = async () => {
    const otpCode = otp.join("");

    if (!email) {
      setMessage("No email found. Please restart the process.");
      return;
    }

    if (otpCode.length !== 6) {
      setMessage("Please enter a complete 6-digit OTP.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/otp/verify", {
        email,
        otp: otpCode,
      });

      setMessage(response.data.message);
      if (response.data.message === "OTP verified successfully") {
        navigate("/HomePage"); // or navigate to reset page if needed
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Verification failed");
    }
  };

  return (
    <div className="otp-container">
      <div className="otp-box">
        <div className="text-center">
          <h2 className="otp-header">Confirm OTP</h2>
          <p className="otp-instructions">Enter the 6-digit code sent to your email.</p>
        </div>

        <div className="otp-inputs">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              className="otp-input"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
            />
          ))}
        </div>

        <button className="verify-button" onClick={handleVerify}>
          Verify OTP
        </button>

        {message && <p className="message-text">{message}</p>}

        <div className="resend-link">
          <p>
            Didn't receive the code? <a href="/send">Resend</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
