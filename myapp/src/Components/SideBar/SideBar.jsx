import React from "react";
import "./SideBar.scss";

const SideBar = () => {
  return (
    <div className="sidebar">
      <nav className="nav">
        <div className="nav-item">
          <a className="menu-link" href="http://localhost:3000/HomePage">Home</a>
        </div>
        <div className="nav-item">
          <a className="menu-link" href="http://localhost:3000/SupervisorPage">Supervisor</a>
        </div>
        <div className="nav-item">
          <a className="menu-link" href="http://localhost:3000/ProjectListPage">Project List</a>
        </div>
        <div className="nav-item">
          <a className="menu-link" href="http://localhost:3000/TemplatePage">Templates</a>
        </div>
        <div className="nav-item">
          <a className="menu-link" href="http://localhost:3000/ApplicationPage">Application</a>
        </div>
        <div className="nav-item">
          <a className="menu-link" href="http://localhost:3000/ProjectViewPage">Project View</a>
        </div>
      </nav>
      <div className="logout-section">
        <a className="logout-btn" href="http://localhost:3000">Logout</a>
      </div>
    </div>
  );
};

export default SideBar;
