import React from "react";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav className="navbar-custom">
      <div className="navbar-container">
        {/* Left: Logo + Portal Text */}
        <div className="logo-section d-flex align-items-center">
          <img
            src="https://dashboard.codeparrot.ai/api/image/Z9gVwpIdzXb5OlV4/lgu-logo.png"
            alt="Logo"
            width="40"
            height="40"
            className="logo-img"
          />
          <span className="portal-text fw-bold">FYP Portal</span>
        </div>

        {/* Center: Search bar */}
        <form className="search-section d-flex align-items-center">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-primary" type="submit">
            Search
          </button>
        </form>

        {/* Right: Profile Section */}
        <div className="profile-section d-flex align-items-center">
          <img
            src="https://dashboard.codeparrot.ai/api/image/Z9gVwpIdzXb5OlV4/image-2.png"
            alt="Profile"
            className="profile-img"
          />
          <div className="text-start mx-2">
            <div className="fw-bold">Sajideen</div>
            <small>Student</small>
          </div>
          <img
            src="https://dashboard.codeparrot.ai/api/image/Z9gVwpIdzXb5OlV4/notifica.png"
            alt="Notification"
            className="icon-img mx-2"
          />
          <img
            src="https://dashboard.codeparrot.ai/api/image/Z9gVwpIdzXb5OlV4/settings.png"
            alt="Settings"
            className="icon-img"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
