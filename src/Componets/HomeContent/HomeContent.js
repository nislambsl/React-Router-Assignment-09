import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const HomeContent = (props) => {
   
    const{name, img, instructor,} =props.service;
    return (
        <Card className="my-3 mx-auto pt-2" style={{ width: '26rem' }}>
  <Card.Img variant="top" src={img}  />
  <Card.Body>
    <Card.Title>Service Name : {name}</Card.Title>
    <Card.Text>
    Instructor: {instructor}
    </Card.Text>
    
  </Card.Body>
</Card>
    //     <div className="col-md-6">
    //         <img className="service-img" src={img} alt="" />
    //     <h4>Service Name : {name}</h4>
    //     <h6>Instructor: {instructor}</h6>
    //     <p>Language: {language}</p>
    //     <p>Price: {price}</p>
    //     <button className="btn btn-success">Book Now</button>
    //  </div>
    );
};

export default HomeContent;