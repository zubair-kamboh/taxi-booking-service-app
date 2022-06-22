import { Col, Container, Form, Row } from 'react-bootstrap'
import '../assets/styles/completeBooking.css'

// images

import lineFull from '../assets/images/line-full.svg'
import lineHalf from '../assets/images/line-half.svg'
import pickUp from '../assets/images/pickup-location-icon.png'
import dropOff from '../assets/images/dropoff-location-icon.png'
import fromToIcon from '../assets/images/from-to-img.svg'
import middleLine from '../assets/images/middle-line.svg'
import PassengersCounter from '../components/PassengersCounter'
import LuggageCounter from '../components/LuggageCounter'

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
            <Row>
              <Col md={5} xs={12}>
                <div className="wrapper">
                  <img src={pickUp} alt="pickUp" />
                  Pick Up From (Airport, Port, Address)
                </div>
              </Col>
              <Col md={2} xs={12} style={{ zIndex: 10 }}>
                <div className="from_to_container">
                  <img src={fromToIcon} alt="fromToIcon" />
                </div>
              </Col>
              <Col md={5} xs={12}>
                <div className="wrapper">
                  <img src={dropOff} alt="dropOff" />
                  Drop Off To (Airport, Port, Address)
                </div>
              </Col>
            </Row>
          </div>

          <Row style={{ marginBottom: '2rem' }}>
            {/* passengers_luggage */}
            <Col md={5} sm={12} style={{ display: 'flex' }}>
              <PassengersCounter />
              <LuggageCounter />
            </Col>
            <Col md={2} sm={0}></Col>
            {/* vehicle_pickup_type */}
            <Col md={5} sm={12} style={{ alignSelf: 'flex-end' }}>
              <div className="vehicleType_pickup_container">
                <div className="wrapper_select">
                  <Form.Select aria-label="Default select example">
                    <option>Select Vehicle Type</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
                <div className="wrapper_select">
                  <Form.Select aria-label="Default select example">
                    <option>Pickup Type</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  )
}

export default CompleteBooking
