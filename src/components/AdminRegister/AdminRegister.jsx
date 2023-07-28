import "./AdminRegister.css";
import React, {useState} from 'react';
import axios from "axios";
import Swal from 'sweetalert2';
import { Link, useNavigate } from "react-router-dom";

const Admin = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    const adminDetails = {
      "username": username,
      "email": email,
      "password": password,
      "confirm_password": confirm_password
    }

    try {

      const url = "http://localhost:8000/admin/register";
			const response = await axios.post(url, adminDetails);

			setTimeout(() => {
        window.location = "/admin-login";	
			}, 0);

      Swal.fire({
				title: `Admin Created Sucessfully!`,
				icon: 'success',
				showCloseButton: true,
        timer: 1000
		  });

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

			}
    }



  }

  return (
   <>
 <div className="container">
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
                      placeholder="Enter your username" 
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
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
                  <div className="button input-box">
                    <button className="signUpBtn">Sign Up</button>
                  </div>
                  <div className="text sign-up-text" style={{fontSize: 18, position: "relative", right: 10}}>
                    <span>Already have an account?</span> {" "}
                    <label for="flip">
                      <Link to="/admin-login">Login</Link>
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  </>
  )
}

export default Admin;