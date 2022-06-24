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
import RecentTrips from './RecentTrips'
import PassengersCounter from './PassengersCounter'
import LuggageCounter from './LuggageCounter'
import Destinations from './Destinations'
import VehiclePickupSelect from './VehiclePickupSelect'
import HeaderButton from './HeaderButton'

const Hero = () => {
  return (
    <div className="hero-container">
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
          />
        </div>

        <Row style={{ marginBottom: '2rem' }} className="g-2">
          {/* passengers_luggage */}
          <Col xs={12} style={{ display: 'flex' }}>
            <PassengersCounter title="Passengers" />
            <LuggageCounter title="Luggage Pieces" home={true} />
          </Col>
        </Row>

        <Row style={{ marginBottom: '2rem' }} className="g-2">
          {/* passengers_luggage */}
          <Col xs={12} style={{ display: 'flex' }}>
            <VehiclePickupSelect home={true} />
          </Col>
        </Row>

        <div className="btns">
          <HeaderButton color="#FFFFFF" bg="#DC2827" title="Book My Ride" />
          <HeaderButton color="#FFFFFF" bg="#F9B233" title="Get Fare" />
        </div>
      </div>
    </div>
  )
}

export default Hero
