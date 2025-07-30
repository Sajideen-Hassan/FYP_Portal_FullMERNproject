import React from "react";
import SideBar from "../../Components/SideBar/SideBar";
import NavBar from "../../Components/NavBar/NavBar";
import "./HomePage.scss";

const HomePage = () => {
  return (
     <div className="HomePage d-flex">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="content flex-grow-1">
        {/* Navbar */}
        <NavBar />

        {/* Welcome and Cards Section */}
        <div className="main-content">
          {/* Welcome Banner */}
          <div className="welcome-banner p-4 rounded shadow mb-4">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
              <div>
                <small className="text-muted">26th April, 2025</small>
                <h2 className="fw-bold mt-2">Welcome back, Sajideen Hassan!</h2>
                <p className="text-secondary">
                  Always stay updated with your FYP Portal activities.
                </p>
              </div>
            </div>
          </div>

          {/* Cards Section */}
          <div className="cards-container">
            {/* Row 1: Card 1 and Card 2 */}
            <div className="row d-flex justify-content-between mb-4">
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title">Supervisor</h5>
                  <p className="card-text">
                    Find details about your supervisor and their specialization areas.
                  </p>
                  <a href="http://localhost:3000/SupervisorPage" className="btn btn-outline-primary">
                   View Supervisor
                  </a>
                </div>
              </div>
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title">Project List</h5>
                  <p className="card-text">
                    Browse all project titles and select the right fit for you.
                  </p>
                  <a href="http://localhost:3000/ProjectListPage" className="btn btn-outline-primary">
                    View Projects
                  </a>
                </div>
              </div>
            </div>

            {/* Row 2: Card 3 and Card 4 */}
            <div className="row d-flex justify-content-between mb-4">
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title">Templates</h5>
                  <p className="card-text">
                    Access official templates to help you manage your project better.
                  </p>
                  <a href="http://localhost:3000/TemplatePage" className="btn btn-outline-primary">
                    Explore Templates
                  </a>
                </div>
              </div>
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title">Application</h5>
                  <p className="card-text">
                    Submit and track your applications directly from here.
                  </p>
                  <a href="http://localhost:3000/ApplicationPage" className="btn btn-outline-primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            {/* Row 3: Card 5 centered */}
            <div className="row d-flex justify-content-center">
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title">Project Viewer</h5>
                  <p className="card-text">
                    Visualize your project progress and share it with your team.
                  </p>
                  <a href="http://localhost:3000/ProjectViewPage" className="btn btn-outline-primary">
                    Explore
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
