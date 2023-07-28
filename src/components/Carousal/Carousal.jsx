import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


const Carousal = () => {
  return (
    <>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./homePageCarousalImg.jpg"
          alt="First slide"
          style={{height: "700px"}}
          
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./homePageCarousalImg1.jpg"
          alt="Second slide"
          style={{height: "700px"}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./homePageCarousalImg3.jpg"
          alt="Third slide"
          style={{height: "700px"}}
        />
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Carousal;