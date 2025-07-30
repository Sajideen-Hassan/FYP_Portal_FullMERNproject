import React from "react";
import SideBar from "../../Components/SideBar/SideBar";
import NavBar from "../../Components/NavBar/NavBar";
import "./TemplatePage.scss";

const TemplatePage = () => {
  return (
    <div className="template-page d-flex">
      {/* Sidebar */}
      <SideBar />
        <NavBar />

        {/* Main Content */}
        <div className="main-content p-4 mt-5">
          {/* Title Section */}
          <div className="templatepage d-flex justify-content-between align-items-center mb-4">
            <h3 className="template-title">Templates</h3>
            <button className="btn btn-primary fw-bold add-project-btn">
              <span className="me-2">+</span> 
              <a href="https://docs.google.com/document/d/11k_BEakhXxB1ZfaqFOKYtJNGgusRMtXSvO2YSdlSRn0/edit?tab=t.0" 
              style={{ color: "white", textDecoration: "none" }}
                target="_blank"
                rel="noreferrer"
                >
                Add Template
                </a> 
            </button>
          </div>

          {/* Cards Section */}
          <div className="cards-container">
            {/* Row 1: Project Documents */}
            <div className="row d-flex justify-content-between mb-4">
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title">Proposal Document</h5>
                  <p className="card-text">
                    Download the project proposal document.
                  </p>
                  <a href="https://docs.google.com/document/d/e/2PACX-1vSzEkbTmcQDcIodLS8WvWGExQ9-JsAxzRny-6-ANr2GCDc1Zzmhhqw16rtLwjYOetruiK2ESYWBn46K/pub" className="btn btn-outline-primary">
                     View Document
                  </a>
                </div>
              </div>
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title">Proposal Handbook</h5>
                  <p className="card-text">
                    Access the proposal handbook for more details.
                  </p>
                  <a href="https://docs.google.com/document/d/e/2PACX-1vSzEkbTmcQDcIodLS8WvWGExQ9-JsAxzRny-6-ANr2GCDc1Zzmhhqw16rtLwjYOetruiK2ESYWBn46K/pub" className="btn btn-outline-primary">
                    View Handbook
                  </a>
                </div>
              </div>
            </div>

            {/* Row 2: SRS Documents */}
            <div className="row d-flex justify-content-between mb-4">
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title">SRS Document</h5>
                  <p className="card-text">
                    Get the Software Requirements Specification document.
                  </p>
                  <a href="https://docs.google.com/document/d/e/2PACX-1vRbXir5c6JbtpUL9jGkBgnvGa-EzK-HHRCiI7zhn9a7kuuZoq8ieELRnmHdd0BeFpfhEfcvzPFYg4ZR/pub?embedded=true" className="btn btn-outline-primary">
                     View Document
                  </a>
                </div>
              </div>
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title">SRS Handbook</h5>
                  <p className="card-text">
                    View the SRS Handbook for guidelines and structure.
                  </p>
                  <a href="https://docs.google.com/document/d/e/2PACX-1vRbXir5c6JbtpUL9jGkBgnvGa-EzK-HHRCiI7zhn9a7kuuZoq8ieELRnmHdd0BeFpfhEfcvzPFYg4ZR/pub?embedded=true" className="btn btn-outline-primary">
                    View Handbook
                  </a>
                </div>
              </div>
            </div>

            {/* Row 3: Defence Documents */}
            <div className="row d-flex justify-content-between mb-4">
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title">Internal Defence Document</h5>
                  <p className="card-text">
                    Download the internal defence document for preparation.
                  </p>
                  <a href="https://docs.google.com/document/d/e/2PACX-1vRbXir5c6JbtpUL9jGkBgnvGa-EzK-HHRCiI7zhn9a7kuuZoq8ieELRnmHdd0BeFpfhEfcvzPFYg4ZR/pub?embedded=true" className="btn btn-outline-primary">
                     View Document
                  </a>
                </div>
              </div>
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title">Internal Defence Handbook</h5>
                  <p className="card-text">
                    Access the internal defence handbook for reference.
                  </p>
                  <a href="https://docs.google.com/document/d/e/2PACX-1vRbXir5c6JbtpUL9jGkBgnvGa-EzK-HHRCiI7zhn9a7kuuZoq8ieELRnmHdd0BeFpfhEfcvzPFYg4ZR/pub?embedded=true" className="btn btn-outline-primary">
                    View Handbook
                  </a>
                </div>
              </div>
            </div>

            {/* Row 4: External Defence Documents */}
            <div className="row d-flex justify-content-between mb-4">
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title">External Defence Document</h5>
                  <p className="card-text">
                    Get the external defence document for your presentation.
                  </p>
                  <a href="https://docs.google.com/document/d/e/2PACX-1vRbXir5c6JbtpUL9jGkBgnvGa-EzK-HHRCiI7zhn9a7kuuZoq8ieELRnmHdd0BeFpfhEfcvzPFYg4ZR/pub?embedded=true" className="btn btn-outline-primary">
                    View Document
                  </a>
                </div>
              </div>
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title">External Defence Handbook</h5>
                  <p className="card-text">
                    Access the external defence handbook for guidelines.
                  </p>
                  <a href="https://docs.google.com/document/d/e/2PACX-1vRbXir5c6JbtpUL9jGkBgnvGa-EzK-HHRCiI7zhn9a7kuuZoq8ieELRnmHdd0BeFpfhEfcvzPFYg4ZR/pub?embedded=true" className="btn btn-outline-primary">
                    View Handbook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default TemplatePage;
