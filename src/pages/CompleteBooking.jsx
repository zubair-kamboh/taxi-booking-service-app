import { Col, Container, Form, Row } from 'react-bootstrap'
import '../assets/styles/completeBooking.css'

// images

import lineFull from '../assets/images/line-full.svg'
import pickUp from '../assets/images/pickup-location-icon.png'
import dropOff from '../assets/images/dropoff-location-icon.png'
import fromToIcon from '../assets/images/from-to-img.svg'
import middleLine from '../assets/images/middle-line.svg'
import PassengersCounter from '../components/PassengersCounter'
import LuggageCounter from '../components/LuggageCounter'
import EstimatedFare from '../components/EstimatedFare'
import NameDate from '../components/NameDate'
import InstructionsOrder from '../components/InstructionsOrder'
import RecentTrips from '../components/RecentTrips'
import HeaderButton from '../components/HeaderButton'
import VehiclePickupSelect from '../components/VehiclePickupSelect'

const CompleteBooking = () => {
  return (
    <Container>
      <div className="complete_booking_container">
        <h3 className="complete_booking_heading">Complete Your Booking</h3>
        <p className="description">
          Please enter your full travel details in the form below to complete
          your booking.
        </p>

        <div className="main_container">
          <img src={lineFull} className="lineFull" alt="lineFull" />
          <img src={middleLine} className="middleLine" alt="middleLine" />

          <div className="pickupdrop_container">
            <Row className="g-2">
              <Col lg={5} xs={12}>
                <div className="wrapper">
                  <img src={pickUp} alt="pickUp" />
                  <input
                    type="text"
                    placeholder="Pick Up From (Airport, Port, Address)"
                  />
                </div>
              </Col>
              <Col lg={2} xs={12} style={{ zIndex: 10 }}>
                <div className="from_to_container">
                  <img src={fromToIcon} alt="fromToIcon" />
                </div>
              </Col>
              <Col lg={5} xs={12}>
                <div className="wrapper">
                  <img src={dropOff} alt="dropOff" />
                  <input
                    type="text"
                    placeholder="Drop Off To (Airport, Port, Address)"
                  />
                </div>
              </Col>
            </Row>
          </div>

          <Row style={{ marginBottom: '2rem' }} className="g-2">
            {/* passengers_luggage */}
            <Col lg={5} sm={12} style={{ display: 'flex' }}>
              <PassengersCounter title="Passengers" />
              <LuggageCounter title="Luggage Pieces" />
            </Col>
            <Col lg={2} sm={0}></Col>
            {/* vehicle_pickup_type */}
            <Col lg={5} sm={12} style={{ alignSelf: 'flex-end' }}>
              <VehiclePickupSelect />
            </Col>
            <div className="roundtrip_checkbox_container">
              <Form.Check type="checkbox" id="checkbox" label="Round Trip" />
            </div>
          </Row>

          <EstimatedFare />

          {/* first/last name & date/time row */}
          <NameDate />
          {/* instructions order row */}
          <InstructionsOrder />
          <img
            src={middleLine}
            className="middleLine bottom_lineImg"
            alt="middleLine"
          />
        </div>

        <div className="recenttrip_container">
          <img
            src={lineFull}
            className="lineFull"
            alt="lineFull"
            style={{ width: '100%' }}
          />
          <h3 className="recent_trip_heading">
            Recent Trips <span>Book</span>ed Near You!
          </h3>
          <img
            src={lineFull}
            className="lineFull"
            alt="lineFull"
            style={{ width: '100%', margin: '50px 0px 20px 0px' }}
          />
        </div>
        <RecentTrips />
        <RecentTrips />
        <RecentTrips />
        <RecentTrips />
        <RecentTrips />
        <img
          src={middleLine}
          className="middleLine"
          style={{
            position: 'absolute',
            top: '161%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          alt="middleLine"
        />

        <HeaderButton title="Load More" color="#FFFFFF" bg="#F9B233" />
      </div>
    </Container>
  )
}

export default CompleteBooking
