import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
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
            <NavLink className="navlink" to="/">
              Services
            </NavLink>
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
