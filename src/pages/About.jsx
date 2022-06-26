import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../assets/styles/about.css'

import car from '../assets/images/about-us-car.png'
import taxi1 from '../assets/images/about-us-taxi1.png'
import taxi2 from '../assets/images/about-us-taxi2.png'
import last from '../assets/images/about-us-last.png'

import AboutCard from '../components/AboutCard'

const About = () => {
  return (
    <div className="about_page">
      <div className="cliped_bg"></div>
      <Container>
        <div className="hero_about_container">
          <Row>
            <Col lg={6} xs={12}>
              <div className="big_title">
                <h1>
                  Worlds Best
                  <br />
                  Taxi Service
                </h1>
              </div>
            </Col>
            <Col lg={6} xs={12}>
              <div className="description">
                <p>
                  Lorem ipsum dolor sit amet,
                  <br />
                  consectetur adipiscing elit. Nisl,
                  <br />
                  purus lectus fermentum integer
                  <br />
                  lectus pellentesque dui rutrum. At
                  <br />
                  dignissim natoque tellus quis.
                </p>
              </div>
            </Col>
          </Row>
        </div>

        <div className="images">
          <img src={car} alt="car" />
          <img src={taxi1} alt="taxi1" />
          <img src={taxi2} alt="taxi2" />
          <img src={last} alt="last" />
        </div>

        <div className="about_content_wrapper">
          <h4 className="heading">About Us</h4>
          <h4 className="des">
            We’re a fully distributed team of 97 people living and working in 12
            countries around the world. And we’re working to build the best
            products to help our customers build their brands and grow their
            businesses on social media. We’ve always aimed to do things a little
            differently at Oval. Since the early days, we’ve had a focus on
            building one of the most unique and fulfilling workplaces by
            rethinking a lot of traditional practices. A commitment to
            supporting our team and our customers has helped Oval grow from
            humble beginnings to now serving more than 73,000 customers. Our
            passion for making meaningful connections flows through everything
            we do. We care about building a quality product, trusted
            relationships with our customers, and a sense of community that
            connects our customers and team with one another.
          </h4>

          <Row>
            <AboutCard statsnumber={10} statsdetails="Years experience" />
            <AboutCard statsnumber="2k+" statsdetails="Riders" />
            <AboutCard statsnumber={70} statsdetails="Taxies" />
            <AboutCard statsnumber="80+" statsdetails="Experts in Place" />
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default About
