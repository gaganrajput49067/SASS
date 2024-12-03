import React from 'react';
import './Sidebar.scss';
import { FaHome, FaUsers, FaBriefcase, FaWallet, FaChartLine } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__menu">
        <div className="sidebar__menu-item active">
          <FaHome className="sidebar__icon" />
          <span className="sidebar__label">Dashboard</span>
        </div>
        <div className="sidebar__menu-item active">
          <FaUsers  className="sidebar__icon" />
          <span className="sidebar__label">Details</span>
        </div>
        <div className="sidebar__menu-item active">
          <FaBriefcase  className="sidebar__icon" />
          <span className="sidebar__label">Task</span>
        </div>
        <div className="sidebar__menu-item active">
          <FaWallet  className="sidebar__icon" />
          <span className="sidebar__label">Wallet</span>
        </div>
        <div className="sidebar__menu-item active">
          <FaChartLine  className="sidebar__icon" />
          <span className="sidebar__label">Market</span>
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;
