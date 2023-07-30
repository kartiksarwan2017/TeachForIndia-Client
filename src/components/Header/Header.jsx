import React from "react";
import "./Header.css";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";

const Header = () => {
  const handleAdminSelection = (event) => {
    // JavaScript to handle dropdown behavior for the first dropdown
    const dropdownSelect1 = document.querySelector(
      ".dropdown:nth-of-type(1) .dropdown-select"
    );
    const dropdownOptions1 = document.querySelector(
      ".dropdown:nth-of-type(1) .dropdown-options"
    );

    dropdownSelect1.addEventListener("click", () => {
      dropdownOptions1.style.display =
        dropdownOptions1.style.display === "block" ? "none" : "block";
    });

    // Hide the first dropdown if the user clicks outside of it
    document.addEventListener("click", (event) => {
      if (!dropdownSelect1.contains(event.target)) {
        dropdownOptions1.style.display = "none";
      }
    });
  };

  const handleVolunteerSelection = (event) => {
    // JavaScript to handle dropdown behavior for the second dropdown
    const dropdownSelect2 = document.querySelector(
      ".dropdown:nth-of-type(2) .dropdown-select"
    );
    const dropdownOptions2 = document.querySelector(
      ".dropdown:nth-of-type(2) .dropdown-options"
    );

    dropdownSelect2.addEventListener("click", () => {
      dropdownOptions2.style.display =
        dropdownOptions2.style.display === "block" ? "none" : "block";
    });

    // Hide the second dropdown if the user clicks outside of it
    document.addEventListener("click", (event) => {
      if (!dropdownSelect2.contains(event.target)) {
        dropdownOptions2.style.display = "none";
      }
    });
  };

  
  const handleAdminLogout = () => {

    setTimeout(() => {
      localStorage.removeItem("adminToken");
      window.location = '/admin-login';
    }, 1000); 
    
    Swal.fire({
      title: `Logged Out Sucessfully`,
      icon: 'success',
      showCloseButton: true
   });
  }  


  const handleVolunteerLogout = () => {

    setTimeout(() => {
      localStorage.removeItem("volunteerToken");
      window.location = '/volunteer-login';
    }, 1000); 
    
    Swal.fire({
      title: `Logged Out Sucessfully`,
      icon: 'success',
      showCloseButton: true
   });
  }  

  return (
    <>
      <div className="header-container">
        <section className="navbar">
          <div id="nav-img">
            <img
              src="https://www.educationworld.in/wp-content/uploads/2021/06/Untitled-design-46.jpg"
              alt="nav-img"
              id="nav-icon"
            />
          </div>
          <div id="nav-title">
            <h1>Teach For India</h1>
          </div>
        </section>

        <div className="nav-links">
          <Link to="/Home">
            <button className="home-btn" style={{fontSize: "20px"}}>Home</button>
          </Link>

          {localStorage.getItem("adminToken") === null && (
            <div className="dropdown">
              <div
                className="dropdown-select admin-btn"
                onClick={(event) => handleAdminSelection(event)}
              >
                Admin
              </div>
              <div className="dropdown-options">
                <Link to="/admin-login">Login</Link>
                <Link to="/admin-register">Register</Link>
              </div>
            </div>
          )}

          { 
              localStorage.getItem("adminToken") !== null &&      
              <button className='white_btn' onClick={handleAdminLogout}>Logout</button> 
          }

          { 
              localStorage.getItem("volunteerToken") !== null &&      
              <button className='white_btn' onClick={handleVolunteerLogout}>Logout</button> 
          }

          {localStorage.getItem("volunteerToken") === null && (
            <div className="dropdown">
              <div
                className="dropdown-select volunteer-btn"
                onClick={(event) => handleVolunteerSelection(event)}
              >
                Volunteer
              </div>
              <div className="dropdown-options">
                <Link to="/volunteer-login">Login</Link>
                <Link to="/volunteer-register">Register</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
