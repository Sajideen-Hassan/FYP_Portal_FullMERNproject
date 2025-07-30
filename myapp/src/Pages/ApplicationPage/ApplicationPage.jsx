import React, { useState } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import NavBar from "../../Components/NavBar/NavBar";
import "./ApplicationPage.scss";
import emailjs from "@emailjs/browser"; // ✅ Install emailjs

const ApplicationPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    rollNumber: "",
    subject: "",
    detail: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCancel = () => {
    setFormData({
      fullName: "",
      rollNumber: "",
      subject: "",
      detail: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Send email via EmailJS
    try {
      const result = await emailjs.send(
        "service_f3pnt9n", // Replace with your EmailJS service ID
        "template_hwbxjqo", // Replace with your EmailJS template ID
        {
          from_name: formData.fullName,
          roll_number: formData.rollNumber,
          subject: formData.subject,
          message: formData.detail,
          to_email: "sajideenhassan@gmail.com", // Send to yourself
        },
        "yD0lGypqODn4UBDPy" // Replace with your EmailJS public key
      );

      console.log("Email sent:", result.text);
      alert("Application submitted successfully!");

      // Optionally clear form after submission
      handleCancel();
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send application.");
    }
  };

  return (
    <div className="application-page d-flex">
      <SideBar />
      <NavBar />

      <div className="main-content p-4 mt-5">
        <h1 className="application-title">Application</h1>

        <div className="application-form">
          <form onSubmit={handleSubmit}>
            <div className="row mb-4">
              <div className="col-md-4">
                <label>Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-3">
                <label>Roll number</label>
                <input
                  type="text"
                  className="form-control"
                  name="rollNumber"
                  value={formData.rollNumber}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-md-8">
              <label>Subject</label><br />
              <input
                type="text"
                className="form-control"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-10">
              <label>Detail</label><br />
              <textarea
                className="form-control"
                rows="8"
                name="detail"
                value={formData.detail}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="button-group d-flex justify-content-end">
              <button type="button" className="btn btn-dark" style={{ margin: "10px" }} onClick={handleCancel}>
                Cancel
              </button>
              <button type="submit" className="btn btn-dark" style={{ margin: "10px" }}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationPage;
