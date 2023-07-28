import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {


  const handleAdminSelection = (event) => {
      // JavaScript to handle dropdown behavior for the first dropdown
      const dropdownSelect1 = document.querySelector('.dropdown:nth-of-type(1) .dropdown-select');
      const dropdownOptions1 = document.querySelector('.dropdown:nth-of-type(1) .dropdown-options');

      dropdownSelect1.addEventListener('click', () => {
        dropdownOptions1.style.display = dropdownOptions1.style.display === 'block' ? 'none' : 'block';
      });

      // Hide the first dropdown if the user clicks outside of it
      document.addEventListener('click', (event) => {
        if (!dropdownSelect1.contains(event.target)) {
          dropdownOptions1.style.display = 'none';
        }
      });
  }

  const handleVolunteerSelection = (event) => {
       // JavaScript to handle dropdown behavior for the second dropdown
   const dropdownSelect2 = document.querySelector('.dropdown:nth-of-type(2) .dropdown-select');
   const dropdownOptions2 = document.querySelector('.dropdown:nth-of-type(2) .dropdown-options');

   dropdownSelect2.addEventListener('click', () => {
     dropdownOptions2.style.display = dropdownOptions2.style.display === 'block' ? 'none' : 'block';
   });

   // Hide the second dropdown if the user clicks outside of it
   document.addEventListener('click', (event) => {
     if (!dropdownSelect2.contains(event.target)) {
       dropdownOptions2.style.display = 'none';
     }
   });
  }

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
         
            <Link to="/Home">
              <button className="home-btn">Home</button>
            </Link>
        
          <div className="dropdown">
            <div className="dropdown-select" onClick={(event) => handleAdminSelection(event)}>Admin</div>
            <div className="dropdown-options">
              <Link to="/admin-login">Login</Link>
              <Link to="/admin-register">Register</Link>
            </div>
          </div>

          <div className="dropdown">
            <div className="dropdown-select" onClick={(event) => handleVolunteerSelection(event)}>Volunteer</div>
            <div className="dropdown-options">
              <Link to="/volunteer-login">Login</Link>
              <Link to="/volunteer-register">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
