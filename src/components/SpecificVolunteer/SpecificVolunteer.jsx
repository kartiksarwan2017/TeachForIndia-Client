import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import axios from "axios";
import "./SpecificVolunteer.css";

const SpecificVolunteer = () => {

    const { volunteerID } = useParams();
    const [specificVolunteer, setSpecificVolunteer] = useState([]);


    useEffect(() => {
        const getSpecificVolunteerDetails = async () => {
          try {
            const response = await axios.get(
              `http://localhost:8000/admin/specific-volunteer-details/${volunteerID}`
            );
    
            console.log([response.data.volunteer]);

            setSpecificVolunteer([response.data.volunteer]);
          } catch (error) {
            console.error(error);
          }
        };
    
        getSpecificVolunteerDetails();
      }, [volunteerID]);
    
      console.log(specificVolunteer);


  return (
    <div className="specific-vounteer-details-container">
        <Container fluid style={{ padding: "5%" }}>
        <Row style={{ textAlign: "center", padding: "5%" }}>
          {specificVolunteer.map((volunteer, index) => {
            return (
              <Col
                id={volunteer._id}
                key={index}
                xs={6}
                md={4}
                lg={3}
                style={{ marginBottom: "2%" }}
              >
                <Card className="card-container">
           
                <Card.Img variant="top" src="https://img.freepik.com/free-photo/young-man-student-with-notebooks-showing-thumb-up-approval-smiling-satisfied-blue-studio-background_1258-65597.jpg" style={{width: "400", height: 500}}/> 
        
               <Card.Body className="card-details">
                    <Card.Title>{volunteer.name}</Card.Title>
                    <Card.Text className="yoga-pose-info">
                        <span className="yoga-details">Email</span>
                        <span className="yoga-pose-category">{volunteer.email}</span>
                    </Card.Text>
                    <Card.Text className="yoga-pose-info">
                        <span className="yoga-details">Contact</span>
                        <span className="yoga-pose-category">{volunteer.contact}</span>
                    </Card.Text>
                    <Card.Text className="yoga-pose-info">
                        <span className="yoga-details">Location</span>
                        <span className="yoga-pose-category">{volunteer.location}</span>
                    </Card.Text>
                    <Card.Text className="yoga-pose-info"  style={{ position: "relative", bottom: "20px"}}>
                        <span className="yoga-details">Languages Spoken</span>
                        <span className="yoga-pose-category">
                            {volunteer.languagesSpoken.map((item, index) => {
                            return (
                                <span style={{display: "flex"}}>
                                    <span>{item}</span>
                                </span>
                            )
                        })}
                        </span>
                    </Card.Text>
                    <Card.Text className="yoga-pose-info" style={{ position: "relative", top: "20px"}}>
                        <span className="yoga-details">Availability</span>
                        <span className="yoga-pose-category" >
                            {volunteer.availability.map((item, index) => {
                            return (
                                <>
                                <span id={item._id} style={{display: "flex"}}>
                                    <span>{item}</span>
                                </span>
                                </>
                            )
                        })}
                        </span>
                    </Card.Text>
                  </Card.Body>
      
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  )
}

export default SpecificVolunteer;