import React, { useRef } from 'react';
import Sidebar from '../../Components/SideBar/SideBar';
import Navbar from '../../Components/NavBar/NavBar';
import './SupervisorRequestForm.scss';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const SupervisorRequestForm = () => {
  const formRef = useRef();
  const navigate = useNavigate(); // <-- Add this line

  const handleCancel = () => {
    formRef.current.reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_0ca2nc9', // Replace with your EmailJS service ID
        'template_hwbxjqo', // Replace with your EmailJS template ID
        formRef.current,
        'yD0lGypqODn4UBDPy' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert('Request sent successfully!');
          navigate('/SupervisorPage'); // Redirect to SupervisorPage after submission
        },
        (error) => {
          alert('Failed to send request. Please try again.');
        }
      );
  };

  return (
    <div className="supervisor-request-form">
      <Sidebar />
      <Navbar />
      <div className="form-wrapper">
        <div className="form-card">
          <h2 className="form-title">Supervisor Request Application</h2>

          <form className="request-form" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="member1Name">Full Name (1st Member)</label>
                <input name="member1Name" type="text" id="member1Name" placeholder="Enter first member's name" required />
              </div>
              <div className="form-group">
                <label htmlFor="member1Roll">Roll Number</label>
                <input name="member1Roll" type="text" id="member1Roll" placeholder="Enter roll number" required />
              </div>
            </div>

            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="member2Name">Full Name (2nd Member)</label>
                <input name="member2Name" type="text" id="member2Name" placeholder="Enter second member's name" required />
              </div>
              <div className="form-group">
                <label htmlFor="member2Roll">Roll Number</label>
                <input name="member2Roll" type="text" id="member2Roll" placeholder="Enter roll number" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="projectTitle">Project Title</label>
              <input name="projectTitle" type="text" id="projectTitle" placeholder="Enter your project title" required />
            </div>

            <div className="form-group">
              <label htmlFor="projectDescription">Project Description (4-5 lines)</label>
              <textarea name="projectDescription" id="projectDescription" rows="4" placeholder="Describe your project idea briefly..." required />
            </div>

            <div className="form-group">
              <label htmlFor="supervisorEmail">Supervisor Email</label>
              <input name="supervisorEmail" type="email" id="supervisorEmail" placeholder="Enter supervisor's email" required />
            </div>

            <div className="form-actions">
              <button type="button" className="btn btn-cancel" onClick={handleCancel}>Cancel</button>
              <button type="submit" className="btn btn-submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SupervisorRequestForm;
