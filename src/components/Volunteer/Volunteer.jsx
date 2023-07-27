import "./Volunteer.css";
import React, {useState} from "react";

const Volunteer = () => {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");

  const [languagesSpoken, setlanguagesSpoken] = useState([]);
  const [languages, setLanguages] = useState("");

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const [availability, setAvailability] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setAvailability((prevAvailability) => [...prevAvailability, value]);
    } else {
      setAvailability((prevAvailability) => prevAvailability.filter((day) => day !== value));
    }
  };

  const handleInputChange = (event) => {
    setLanguages(event.target.value);
  };


  const convertToArray = () => {
    // Split the input value by commas, spaces, or newlines to create an array
    const newArray = languages.split(/,|\s|\n/).filter((item) => item.trim() !== '');
    setlanguagesSpoken(newArray);
  };

  console.log(languagesSpoken);


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
              <form action="#">
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-envelope"></i>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="text">
                    <a href="#">Forgot password?</a>
                  </div>
                  <div className="button input-box">
                    <input type="submit" value="Sumbit" />
                  </div>
                  <div className="text sign-up-text">
                    Don't have an account? <label for="flip">Sigup now</label>
                  </div>
                </div>
              </form>
            </div>
            <div className="signup-form">
              <div className="title">Signup</div>
              <form action="#">
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Enter your name" required />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-envelope"></i>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input
                      type="password"
                      placeholder="Confirm Your Password"
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
                      required
                    />
                  </div>

             
<div>
  Enterlanguages 
<textarea
        value={languages}
        onChange={handleInputChange}
        placeholder="Enter multiple langauges separated by commas, spaces, or newlines"
        rows="5"
        cols="40"
 />

<button onClick={convertToArray}>Select Language</button>
</div>

<div>
      <h2>Availability Input</h2>
      {daysOfWeek.map((day) => (
        <div key={day}>
          <label>
            <input
              type="checkbox"
              value={day}
              checked={availability.includes(day)}
              onChange={handleCheckboxChange}
            />
            {day}
          </label>
        </div>
      ))}
    </div>




                  <div className="button input-box">
                    <input type="submit" value="Sumbit" />
                  </div>
                  <div className="text sign-up-text">
                    Already have an account? <label for="flip">Login now</label>
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

export default Volunteer;
