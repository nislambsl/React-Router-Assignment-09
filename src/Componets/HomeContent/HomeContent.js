import React from 'react';
import { Card } from 'react-bootstrap';

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
   
    );
};

export default HomeContent;