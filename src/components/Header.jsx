import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import '../assets/styles/header.css'
import HeaderButton from './HeaderButton'
import logo from '../assets/images/site-logo.png'
const Header = () => {
  let activeStyle = {
    fontWeight: 'bold',
  }

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
            <NavLink
              className="navlink"
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
            <NavLink
              className="navlink"
              to="/fare-page"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Fare
            </NavLink>

            <NavLink
              className="navlink"
              to="/about-us"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              About
            </NavLink>
            <NavLink
              className="navlink"
              to="/contact-us"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Contact
            </NavLink>
            <NavDropdown
              title="Services"
              style={{ color: '#000000 !important' }}
              id="nav-dropdown"
              className="navlink services_dropdown_styles"
            >
              <Link to="/airport-transport" className="dropdown-item">
                Airport Transport
              </Link>
              <Link to="/private-car" className="dropdown-item">
                Private Car
              </Link>
              <Link to="/point-to-point" className="dropdown-item">
                Point to Point
              </Link>
              <Link to="/corporate-transportation" className="dropdown-item">
                Corporate Transportation
              </Link>
              <Link to="/limo-service" className="dropdown-item">
                Limo Service
              </Link>
              <Link to="/party-limosine" className="dropdown-item">
                Party Limosine
              </Link>
            </NavDropdown>
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
