import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./Dashboard.scss";
import MainContent from "./MainContent";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="dashboard-container">
        <div className="sideDiv">
          <Sidebar className="sidebar" />
        </div>
        <div className="main-content">
          <MainContent />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
