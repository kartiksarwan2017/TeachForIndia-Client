import React, {useState} from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';
import "./AdminLogin.css";

const AdminLogin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const adminDetails = {
      "email": email,
      "password": password
    }

    try {

      const url = "http://localhost:8000/admin/login";
			const response = await axios.post(url, adminDetails);
      
			Swal.fire({
				title: `Logged in Sucessfully`,
				icon: 'success',
				showCloseButton: true
		    });

      setTimeout(() => {
        localStorage.setItem("adminToken", response.data.token);
			   window.location = "/admin-dashboard";	
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
            <div className="login-form">
              <div className="title">Login</div>
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="input-boxes">
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
                  <div className="button input-box">
                    <button className="signInBtn">Sign In</button>
                  </div>
                  <div className="text sign-up-text" style={{fontSize: 18, position: "relative", right: 10}}>
                    <span>Don't have an account?</span>{" "}
                    <label for="flip">
                      <Link to="/admin-register">Sign Up</Link>
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  )
}

export default AdminLogin;