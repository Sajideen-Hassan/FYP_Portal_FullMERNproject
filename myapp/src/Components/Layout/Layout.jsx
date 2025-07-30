import React from "react";
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import "./Layout.scss"; // Import layout-level styles

const Layout = () => {
  return (
    <div className="main-layout">
      <SideBar />
      <NavBar />
      <div className="page-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
