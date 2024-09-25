import React from 'react';
import './Sidebar.scss';
import { FaHome, FaUsers, FaBriefcase } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__menu">
        <div className="sidebar__menu-item active">
          <FaHome className="sidebar__icon" />
          <span className="sidebar__label">Dashboard</span>
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;
