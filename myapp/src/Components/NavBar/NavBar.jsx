import React from "react";
import "./NavBar.scss";
import lguLogo from "../../Img/lahore-garrison-university-lahore-pakistan.png";
import profileImg from "../../Img/FYP.Portal.png";
import notificationIcon from "../../Img/notifications.png";
import settingsIcon from "../../Img/settings.png";

const NavBar = () => {
  return (
    <nav className="navbar-custom">
      <div className="navbar-container">
        {/* Left: Logo + Portal Text */}
        <div className="logo-section d-flex align-items-center">
          <img
            src={lguLogo}
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
            src={profileImg}
            alt="Profile"
            className="profile-img"
          />
          <div className="text-start mx-2">
            <div className="fw-bold">Sajideen</div>
            <small>Student</small>
          </div>
          <img
            src={notificationIcon}
            alt="Notification"
            className="icon-img mx-2"
          />
          <img
            src={settingsIcon}
            alt="Settings"
            className="icon-img"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
