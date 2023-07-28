import "./Home.css";
import React from 'react';
import Carousal from "../Carousal/Carousal.jsx";


const Home = () => {
  return (
    <>
     <div className="home-container">

      <Carousal />

      <div className="main-section">
        <div id="main-title">
          <h1>TEACHING CREATES ALL OTHER PROFESSIONS</h1>
        </div>
        <div id="main-img-container">
          <img src="./mainImg.jpg" alt="main-img" />
          <img src="./mainImg2.jpg" alt="main-img" />
          <img src="./mainImg3.jpg" alt="main-img" />
        </div>
      </div>

     </div>
    </>
  )
}

export default Home;