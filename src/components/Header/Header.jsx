import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
 
  return (
    <>
      <div className="header-container">
        <navbar>
          <div id="nav-img">
            <img src="./TeachForIndiaIcon.png" alt="nav-img" id="nav-icon" />
          </div>
          <div id="nav-title">
            <h1>Teach For India</h1>
          </div>
        </navbar>

        <div className="nav-links">
          <Link to="/Home">Home</Link>
          <Link to="/admin">
            <button>Admin</button>
          </Link>
          <Link to="/volunteer">
            <button>Volunteer</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
