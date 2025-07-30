import React, { useState } from "react";
import "./ChangePassword.scss";
import { Link } from "react-router-dom";
import PWChange from "../../Img/PW.change.png"; // adjust path as needed

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleChangePassword = () => {
    if (!newPassword || !confirmPassword) {
      setMessage("All fields are required.");
    } else if (newPassword !== confirmPassword) {
      setMessage("New password and confirm password do not match.");
    } else {
      setMessage("Password successfully changed.");
    }
  };

  return (
    <div className="change-password-container">
      <div className="change-password-box">
        <div className="text-center">
          <h2 className="change-password-header">Set New Password</h2>
          <div className="image-box">
            <img
              src={PWChange}
              alt="Change-Password-logo"
              className="changePW-image"
            />
            <p className="image-text">Secure your account by creating a strong password.</p>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="new-password">New Password</label>
          <input
            type="password"
            id="new-password"
            className="form-control"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirm-password">Confirm New Password</label>
          <input
            type="password"
            id="confirm-password"
            className="form-control"
            placeholder="Re-enter new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button className="change-password-button" onClick={handleChangePassword}>
          <Link to="/HomePage">Change Password</Link>
        </button>

        {message && <p className="message-text">{message}</p>}
      </div>
    </div>
  );
};

export default ChangePassword;
