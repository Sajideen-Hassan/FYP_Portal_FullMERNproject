import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import SideBar from "../../Components/SideBar/SideBar";
import NavBar from "../../Components/NavBar/NavBar";
import "./ProjectViewPage.scss";

const ProjectViewPage = () => {
  const [clickedRow, setClickedRow] = useState({});

  const handleAction = async (rowIndex, type) => {
    const email = prompt("Please enter the user's email:");
    if (!email) return;

    // Email messages per type
    const messages = {
      accepted: "Well done, keep it up!",
      review: "Good work, but needs improvement.",
      reject: "Work harder next time.",
    };

    // EmailJS details
    const serviceId = "service_q12e12r2";
    const templateId = "template_8ez0da2";
    const publicKey = "yD0lGypqODn4UBDPy";

    try {
      await emailjs.send(serviceId, templateId, {
        to_email: email,
        message: messages[type],
      }, publicKey);

      alert(`Email sent: ${messages[type]}`);
      setClickedRow((prev) => ({ ...prev, [rowIndex]: type }));
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email.");
    }
  };

  const projects = [
    { id: 6759, title: "FYP Portal" },
    { id: 6760, title: "FYP Portal 2" },
  ];

  return (
    <div className="project-view d-flex">
      <SideBar />
      <NavBar />

      <div className="main-content">
        <h1 className="project-view-title">Project View</h1>

        <div className="container">
          <div className="table-responsive">
            <table className="table project-table">
              <thead>
                <tr className="header">
                  <th>#</th>
                  <th>ID Number</th>
                  <th>Project Title</th>
                  <th>Document</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr key={project.id} className="project-item">
                    <td>{index + 1}</td>
                    <td>{project.id}</td>
                    <td>{project.title}</td>
                    <td>
                      <img
                        src="https://dashboard.codeparrot.ai/api/image/Z900sgAVCboODTK9/upload-l.png"
                        alt="document icon"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://via.placeholder.com/24?text=📄";
                        }}
                      />
                    </td>
                    <td>
                      <div className="button-group">
                        {clickedRow[index] ? (
                          <span className={`status-tag ${clickedRow[index]}`}>
                            {clickedRow[index].charAt(0).toUpperCase() + clickedRow[index].slice(1)}
                          </span>
                        ) : (
                          <>
                            <button className="btn btn-accepted" onClick={() => handleAction(index, 'accepted')}>
                              Accepted
                            </button>
                            <button className="btn btn-reject" onClick={() => handleAction(index, 'reject')}>
                              Reject
                            </button>
                            <button className="btn btn-review" onClick={() => handleAction(index, 'review')}>
                              Review
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="pagination-container">
            <div className="pagination">
              <button className="btn btn-current">1</button>
              <button className="btn">2</button>
              <button className="btn">3</button>
              <span className="dots">...</span>
              <button className="btn">8</button>
              <button className="btn">9</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectViewPage;
