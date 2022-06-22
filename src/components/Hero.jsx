import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

// icons
import line from '../assets/images/line.png'
import heroBg from '../assets/images/hero-bg.svg'
import luggage from '../assets/images/luggage-icon.png'
import passengersIcon from '../assets/images/passengers-icon.png'
import dropoff from '../assets/images/dropoff-location-icon.png'

const Hero = () => {
  return (
    <div className="hero-container">
      <Row>
        <Col md={4}>
          <div className="form_container">
            <Form>
              <h3 className="get_instant_fare">Get Instant Fare</h3>
              <img src={line} alt="line" />
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Hero
