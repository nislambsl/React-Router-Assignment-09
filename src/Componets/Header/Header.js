import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header text-center bg-light text-info">
          <h1>Online Learning Academy</h1>
          <h4>Welcome to our website!</h4>
        
        
        <>
  <Navbar bg="dark" variant="dark">
    <Container>
   
    <Nav className="m-auto header">
    <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Our Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="*"></Link>
            </li>
          </ul>
    </Nav>
    </Container>
  </Navbar>
  

 
  
</>

        </div>
    );
};

export default Header;