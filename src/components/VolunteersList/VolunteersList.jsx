import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import  Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from 'axios';

const VolunteersList = () => {

    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {

        const getAllVounteers = async () => {
            const response = await axios.get('http://localhost:8000/admin/volunteers-list');
            setVolunteers(response.data.volunteers);
        }
        getAllVounteers();

    }, []);

    console.log(volunteers);

  return (
    <>
      <div className='volunteer-list-container'>
      <Container fluid style={{padding:"0 5% 5% 5%"}}>
            <Row style={{textAlign: "center"}}>

                {volunteers.map((volunteer, index) => {
                return(
                  <Col id={volunteer._id} key = {index} xs={6} md={4} lg={3} style={{marginBottom: "2%"}}>
                      <Card className="card-container"onClick={() => window.location.href="/specific-volunteer-details/" + volunteer._id} style={{height: 450}}>
                      <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/005/112/925/original/cartoon-boy-student-stands-and-reading-a-book-free-vector.jpg" style={{width: "100%", height: 300}}/>
                      <Card.Body>
                          <Card.Title style={{margin: "10 0"}}>{volunteer.name}</Card.Title>
                          <Card.Text>{volunteer.email}</Card.Text>
                      </Card.Body>
                      </Card>
                  </Col>
                  )
               })}
                </Row>
            </Container>
      </div>
    </>
  )
}

export default VolunteersList;