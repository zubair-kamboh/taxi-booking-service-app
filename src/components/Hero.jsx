import React from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'

// icons
import line from '../assets/images/line.png'

import PassengersCounter from './PassengersCounter'
import LuggageCounter from './LuggageCounter'
import Destinations from './Destinations'
import VehiclePickupSelect from './VehiclePickupSelect'
import HeaderButton from './HeaderButton'

const Hero = ({ farePage, home }) => {
  return (
    <div className={`hero-container ${home === true ? 'home_specific' : ''}`}>
      {farePage === true ? (
        <Row className="gx-5">
          <Col lg={5} xs={12}>
            <div
              className="form_container"
              style={{ position: 'static', transform: 'translate(0%)' }}
            >
              {/* <Form> */}
              <h3 className="get_instant_fare">Get Instant Fare</h3>
              <img src={line} alt="line" className="horizental_line" />

              <div
                style={{ margin: '10px 0px' }}
                className="hero_passenger_luggage_container"
              >
                <Destinations
                  from="Pick Up From (Airport, Port, Address)"
                  to="Drop Off To (Airport, Port, Address)"
                  calculator={true}
                />
              </div>

              <Row style={{ marginBottom: '1rem' }} className="g-2">
                {/* passengers_luggage */}
                <Col
                  xs={12}
                  style={{ display: 'flex', flexDirection: 'row' }}
                  className="stack_luggage_passenger"
                >
                  <PassengersCounter title="Passengers" />
                  <LuggageCounter title="Luggage Pieces" home={true} />
                </Col>
              </Row>

              <Row style={{ marginBottom: '1rem' }} className="g-2">
                {/* passengers_luggage */}
                <Col xs={12} style={{ display: 'flex', flexDirection: 'row' }}>
                  <VehiclePickupSelect home={true} />
                </Col>
              </Row>

              <div className="btns">
                <HeaderButton
                  color="#FFFFFF"
                  bg="#DC2827"
                  title="Book My Ride"
                />
                <HeaderButton color="#FFFFFF" bg="#F9B233" title="Get Fare" />
              </div>
            </div>
          </Col>
          <Col lg={7} xs={12}>
            <div className="details_container">
              <p>
                Distance between Bestwood Estate and Checkers Kathu is approx.
                1.61 miles (2.59 km) with 4 min travel time. <br />
                <br /> This taxi fare estimate from Bestwood Estate to Checkers
                Kathu was updated 14 hours ago. <br />
                <br /> Update the estimate to see the real-time fare prices in
                Kathu. <br />
                <br /> Did you know that we have all the fare rates for Uber
                Kathu? * See all the taxi services and find your next cheap
                Kathu ride. <br />
                <br /> * Uber fare estimate from Bestwood Estate to Checkers
                Kathu may vary due to weather and traffic. <br />
                <br /> Our estimates in Kathu, 8446, South Africa do not include
                any discounts or promotions. <br />
                <br />
                Distance between Bestwood Estate and Checkers Kathu is approx.
                1.61 miles (2.59 km) with 4 min travel time.
                <br />
                <br /> This taxi fare estimate from Bestwood Estate to Checkers
                Kathu was updated 14 hours ago. Update the estimate to see the
                real-time fare prices in Kathu .
              </p>
            </div>
          </Col>
        </Row>
      ) : (
        <div className="form_container">
          {/* <Form> */}
          <h3 className="get_instant_fare">Get Instant Fare</h3>
          <img src={line} alt="line" className="horizental_line" />

          <div
            style={{ margin: '10px 0px' }}
            className="hero_passenger_luggage_container"
          >
            <Destinations
              from="Pick Up From (Airport, Port, Address)"
              to="Drop Off To (Airport, Port, Address)"
              calculator={true}
            />
          </div>

          <Row style={{ marginBottom: '1rem' }} className="g-2">
            {/* passengers_luggage */}
            <Col
              xs={12}
              style={{ display: 'flex', flexDirection: 'row' }}
              className="stack_luggage_passenger"
            >
              <PassengersCounter title="Passengers" />
              <LuggageCounter title="Luggage Pieces" home={true} />
            </Col>
          </Row>

          <Row style={{ marginBottom: '1rem' }} className="g-2">
            {/* passengers_luggage */}
            <Col xs={12} style={{ display: 'flex', flexDirection: 'row' }}>
              <VehiclePickupSelect home={true} />
            </Col>
          </Row>

          <div className="btns">
            <HeaderButton color="#FFFFFF" bg="#DC2827" title="Book My Ride" />
            <HeaderButton color="#FFFFFF" bg="#F9B233" title="Get Fare" />
          </div>
        </div>
      )}
    </div>
  )
}

export default Hero
