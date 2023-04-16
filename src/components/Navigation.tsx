import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <>
      <Navbar>
        <Nav className="">
          <Nav.Link as={NavLink} to="/" className="primary-link">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/about" className="primary-link">About</Nav.Link>
          {/* <Nav.Link as={NavLink} to="/projects" className="primary-link">Projects</Nav.Link> */}
        </Nav>
      </Navbar>
    </>
  );
};

export default Navigation;