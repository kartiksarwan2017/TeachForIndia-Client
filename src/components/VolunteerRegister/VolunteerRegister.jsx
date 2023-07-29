import "./VolunteerRegister.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';

const VolunteerRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");
  const [languagesSpoken, setlanguagesSpoken] = useState([]);
  const [languages, setLanguages] = useState("");

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [availability, setAvailability] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setAvailability((prevAvailability) => [...prevAvailability, value]);
    } else {
      setAvailability((prevAvailability) =>
        prevAvailability.filter((day) => day !== value)
      );
    }
  };


  const handleLanguageChange = (e) => {

      setLanguages(e.target.value);
       // Split the input value by commas, spaces, or newlines to create an array
       const newArray = languages
       .split(/,|\s|\n/)
       .filter((item) => item.trim() !== "");
       setlanguagesSpoken(newArray);

  }

  const handleRegisterSubmit = async (e) => {

    e.preventDefault();

    const volunteerDetails = {
      "name": name,
      "email": email,
      "password": password,
      "confirm_password": confirm_password,
      "contact": contact,
      "location": location,
      "languagesSpoken": languagesSpoken,
      "availability": availability

    }
    
    try{

      const url = "http://localhost:8000/volunteer/register";
			const response = await axios.post(url, volunteerDetails);

      console.log(response);
      
			Swal.fire({
				title: `<strong>${response.data.message}</strong>`,
				icon: 'success',
				showCloseButton: true
		    });

      setTimeout(() => {
        localStorage.setItem("token", response.data.token);
			   window.location = "/volunteer-login";	
			}, 0);

    }catch(error){
      if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				Swal.fire({
					title: `<strong>${error.response.data.message}</strong>`,
					icon: 'error',
					showCloseButton: true
				});

        console.log(error.response);
			}
    }

  }

  return (
    <>
      <div className="container sign-up-container">
        <input type="checkbox" id="flip" />
        <div className="cover">
          <div className="front">
            <img src="./BgLoginSignup.jpg" alt="" />
            <div className="text">
              <span className="text-1">
                Every new friend is a <br /> new adventure
              </span>
              <span className="text-2">Let's get connected</span>
            </div>
          </div>
          <div className="back">
            <div className="text">
              <span className="text-1">
                Complete miles of journey <br /> with one step
              </span>
              <span className="text-2">Let's get started</span>
            </div>
          </div>
        </div>
        <div className="forms">
          <div className="form-content">
        
            <div className="signup-form">
              <div className="title">Signup</div>
              <form onSubmit={(e) => handleRegisterSubmit(e)} >
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-user"></i>
                    <input 
                      type="text" 
                      placeholder="Enter your name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-envelope"></i>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input
                      type="password"
                      placeholder="Confirm Your Password"
                      value={confirm_password}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      placeholder="Enter your mobile number"
                      pattern="[0-9]{10}"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      placeholder="e.g., City, Country"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <h5>Enter Languages</h5>
                    <textarea
                      value={languages}
                      onChange={(e) => handleLanguageChange(e)}
                      placeholder="Enter multiple langauges separated by commas, spaces, or newlines"
                      rows="5"
                      cols="40"
                    />
                
                  </div>

                  <div className="availibility-input">
                    <h5>Availability Input</h5>
                    {daysOfWeek.map((day) => (
                      <div key={day} className="checkbox-container">
                        <label>
                          <input
                            type="checkbox"
                            value={day}
                            checked={availability.includes(day)}
                            onChange={handleCheckboxChange}
                            style={{marginLeft: 40}}
                          />
                         <span style={{marginLeft: 20, fontSize:18}}>{day}</span>
                        </label>
                      </div>
                    ))}
                  </div>

                  <div className="button input-box">
                    <button className="signUpBtn">Sign Up</button>
                  </div>
                  <div className="text sign-up-text" style={{fontSize: 18, position: "relative", right: 40}}>
                    <span>Already have an account? </span>
                    <label for="flip">
                      <Link to="/volunteer-login">Login</Link>
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VolunteerRegister;
