import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import firstIcon from '../assets/images/footer-icon-1st.png'
import twitterIcon from '../assets/images/footer-twitter.png'
import instaIcon from '../assets/images/footer-instagram.png'
import phone from '../assets/images/footer-phone-icon.png'
import email from '../assets/images/footer-email-icon.png'
import finder from '../assets/images/footer-finder-icon.png'

const Footer = () => {
  return (
    <div className="footer_container">
      <Container>
        <Row>
          <Col md={6} xs={12}>
            <div className="footer_logo_container">
              <h4 className="footer_logo">LOGO HERE</h4>
              <p className="footer_description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="icons">
                <img src={firstIcon} alt="firstIcon" className="icon" />
                <img src={instaIcon} alt="instaIcon" className="icon" />
                <img src={twitterIcon} alt="twitterIcon" className="icon" />
              </div>
            </div>
          </Col>
          <Col md={3} xs={4}>
            <h5 className="about_us_heading">About Us</h5>
            <ul className="navlinks">
              <li className="navlink">
                <a href="#/">Home</a>
              </li>
              <li className="navlink">
                <a href="#/">Services</a>
              </li>
              <li className="navlink">
                <a href="#/">Online Booking</a>
              </li>
              <li className="navlink">
                <a href="#/">About</a>
              </li>
              <li className="navlink">
                <a href="#/">Blog</a>
              </li>
              <li className="navlink">
                <a href="#/">Contact</a>
              </li>
            </ul>
          </Col>
          <Col md={3} xs={8}>
            <h5 className="about_us_heading">About Us</h5>
            <ul className="navlinks">
              <li className="nav_li">
                <img src={phone} alt="phone" />
                <p className="navlink">+880-2-9898796</p>
              </li>
              <li className="nav_li">
                <img src={finder} alt="finder" />
                <p className="navlink">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </li>
              <li className="nav_li">
                <img src={email} alt="email" />
                <p className="navlink">company@gmail.com</p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
