import React from "react";
import { FaSearch, FaBell, FaTh, FaUserCircle, FaCog } from "react-icons/fa"; // Icons for grid, bell, profile, and settings
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <h1 className="header__title">Dashboard</h1>
      </div>
      <div className="header__right">
        <div className="header__search">
          <FaSearch className="header__search-icon" />
          <input 
            type="text" 
            className="header__search-input" 
            placeholder="Start searching" 
          />
        </div>
        <div className="header__icons">
          <FaBell className="header__icon" />
          <FaCog className="header__icon" />
          <FaTh className="header__icon" />
          <FaUserCircle className="header__icon header__profile" />
        </div>
      </div>
    </header>
  );
};

export default Header;
