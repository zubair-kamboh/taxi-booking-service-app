import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import '../assets/styles/header.css'
import HeaderButton from './HeaderButton'
import logo from '../assets/images/site-logo.png'
const Header = () => {
  return (
    <Navbar className="header" expand="lg">
      <Container style={{ background: '#f9b233' }}>
        <NavLink to="/" className="logo_container">
          <img src={logo} alt="logo" />
          Taxi Website
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navlinks align-items-center">
            <NavLink className="navlink" to="/">
              Home
            </NavLink>
            <NavLink className="navlink" to="/fare-page">
              Fare
            </NavLink>
            <NavDropdown
              title="Services"
              style={{ color: '#000000 !important' }}
              id="nav-dropdown"
              className="navlink"
            >
              <NavDropdown.Item eventKey="4.1" href="/airport-transport">
                Airport Transport
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.1" href="/private-car">
                Private Car
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.1" href="/point-to-point">
                Point to Point
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.1" href="/corporate-transportation">
                Corporate Transportation
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.1" href="/limo-service">
                Limo Service
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.1" href="/party-limosine">
                Party Service
              </NavDropdown.Item>
            </NavDropdown>

            {/* <NavLink className="navlink" to="/private-car">
              Private Car
            </NavLink>
            <NavLink className="navlink" to="/point-to-point">
              Point to Point
            </NavLink>
            <NavLink className="navlink" to="/corporate-transportation">
              Corporate
            </NavLink>
            <NavLink className="navlink" to="/limo-service">
              Limo
            </NavLink>
            <NavLink className="navlink" to="/party-limosine">
              Party
            </NavLink> */}
            <NavLink className="navlink" to="/about-us">
              About
            </NavLink>
            <NavLink className="navlink" to="/contact-us">
              Contact
            </NavLink>
            <HeaderButton
              title="Book My Ride"
              color="#FFFFFF"
              bg="#DC2827"
              to="/complete-booking"
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
