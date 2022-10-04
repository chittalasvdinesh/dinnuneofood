import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './index.css'
import Home from '../Home';
export default function Header() {
  return (
    <section  className='header-section'>
        <Navbar collapseOnSelect expand="lg" bg="transparent" fixed='top' variant="dark">
      <Container>
        <Navbar.Brand href="#home" className='d-flex align-items-baseline'>
            
            <img src="./Images/nav-logo.png" className='pe-2'/>
             <h2 className='nav-title'>Get the App</h2> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
         
          <Nav className='ms-auto navigation-links'>
            <Nav.Link href="#deets">Investor Relations</Nav.Link>
            <Nav.Link href="#deets">Add restaurant</Nav.Link>
            <Nav.Link href="#deets">Log in</Nav.Link>
            <Nav.Link href="#deets">Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
   
          
    </section>
  )
}


