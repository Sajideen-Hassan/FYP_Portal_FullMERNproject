import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ForgetPassword.scss"; // Keep your existing styles

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSend = async () => {
    if (!email) {
      setMessage("");
      setError("Please enter a valid email address.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/otp/send", { email });
      localStorage.setItem("otpEmail", email);
      navigate("/OtpPage"); // 👈 Make sure your route matches this
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send OTP");
      setMessage("");
    }
  };

  return (
    <div className="forget-password-container">
      <div className="forget-password-box">
        <h1 className="welcome-text">Forgot Password</h1>
        <h2 className="instructions-text">Enter your email to receive an OTP</h2>

        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button className="send-otp-button" onClick={handleSend}>
          Send OTP
        </button>

        {message && <p className="message-text">{message}</p>}
        {error && <p className="message-text" style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export default ForgetPassword;
