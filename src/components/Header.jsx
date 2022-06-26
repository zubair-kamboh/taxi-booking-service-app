import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import '../assets/styles/header.css'
import HeaderButton from './HeaderButton'

const Header = () => {
  return (
    <Navbar className="header" expand="lg">
      <Container style={{ background: '#f9b233' }}>
        <Navbar.Brand href="/" className="logo">
          Logo Here
        </Navbar.Brand>
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
