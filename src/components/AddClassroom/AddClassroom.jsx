import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';

const AddClassroom = () => {

    const [classroomID, setClassroomID] = useState("");
    const [capacity, setCapacity] = useState();
    const [requirement, setRequirement] = useState();
    const [subjects, setSubjects] = useState("");
    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const [languagesSpoken, setlanguagesSpoken] = useState([]);
    const [languages, setLanguages] = useState("");
    const [location, setLocation] = useState("");


    const handleLanguageChange = (e) => {

        setLanguages(e.target.value);
         // Split the input value by commas, spaces, or newlines to create an array
         const newArray = languages
         .split(/,|\s|\n/)
         .filter((item) => item.trim() !== "");
         setlanguagesSpoken(newArray);
  
    }
    const handleSubjectChange = (e) => {
      setSubjects(e.target.value);
         // Split the input value by commas, spaces, or newlines to create an array
         const newArray = subjects
         .split(/,|\s|\n/)
         .filter((item) => item.trim() !== "");
         setSelectedSubjects(newArray);
    }



    const handleSubmit = async (e) => {

        e.preventDefault();

        const classroomDetails = {
            "classroomID" : classroomID,
            "capacity": capacity,
            "requirement": requirement,
            "subjects": selectedSubjects,
            "languageRequirement": languagesSpoken,
            "location": location
        }

        
        try{

          const url = "https://teach-for-india-server.onrender.com/classroom/add-new-classroom";
          const response = await axios.post(url, classroomDetails);
    
          console.log(response);
          
          Swal.fire({
            title: `<strong>${response.data.message}</strong>`,
            icon: 'success',
            showCloseButton: true
            });
    
          setTimeout(() => {
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
    
            console.log(error.response);
          }
        }

    }

  return (
    <div className="container classroom-container">
    <input type="checkbox" id="flip" />
    <div className="cover">
      <div className="front">
        <img src="/classroomImg.png" style={{objectFit: "fill"}} alt="" />
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
          <div className="title">Create Classroom</div>
          <form onSubmit={(e) => handleSubmit(e)} >
            <div className="input-boxes">
              <div className="input-box">
                <i className="fas fa-user"></i>
                <input 
                  type="text" 
                  placeholder="Enter your classroomID" 
                  value={classroomID}
                  onChange={(e) => setClassroomID(e.target.value)}
                  required />
              </div>
              <div className="input-box">
                <i className="fas fa-envelope"></i>
                <input
                  type="number"
                  placeholder="Enter your capacity"
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                  required
                />
              </div>
              <div className="input-box">
                <i className="fas fa-lock"></i>
                <input
                  type="number"
                  placeholder="Enter your requirement"
                  value={requirement}
                  onChange={(e) => setRequirement(e.target.value)}
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
                <h5>Enter Subjects</h5>
                <textarea
                  value={subjects}
                  onChange={(e) => handleSubjectChange(e)}
                  placeholder="Enter multiple subjects separated by commas, spaces, or newlines"
                  rows="5"
                  cols="40"
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

              <div className="button input-box">
                <button className="signUpBtn">Create Classroom</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AddClassroom;