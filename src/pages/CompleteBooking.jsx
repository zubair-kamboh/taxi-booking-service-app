import { Col, Container, Form, Row } from 'react-bootstrap'
import '../assets/styles/completeBooking.css'

// images
import lineFull from '../assets/images/line-full.svg'
import pickUp from '../assets/images/pickup-location-icon.png'
import dropOff from '../assets/images/dropoff-location-icon.png'
import fromToIcon from '../assets/images/from-to-img.svg'
import middleLine from '../assets/images/middle-line.svg'
import currentLocation from '../assets/images/current-location-icon.png'

import PassengersCounter from '../components/PassengersCounter'
import LuggageCounter from '../components/LuggageCounter'
import EstimatedFare from '../components/EstimatedFare'
import NameDate from '../components/NameDate'
import InstructionsOrder from '../components/InstructionsOrder'
import VehiclePickupSelect from '../components/VehiclePickupSelect'
import RecentTripsContainer from '../components/RecentTripsContainer'
import EmailPhone from '../components/EmailPhone'
import BottomNavigation from '../components/BottomNavigation'

const CompleteBooking = () => {
  return (
    <>
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

            <div className="pickupdrop_container mb-2">
              <Row className="g-2">
                <Col lg={5} xs={12}>
                  <div className="wrapper" style={{ position: 'relative' }}>
                    <img src={pickUp} alt="pickUp" />
                    <input
                      type="text"
                      placeholder="Pick Up From (Airport, Port, Address)"
                    />

                    <div
                      style={{
                        background: 'var(--yello)',
                        position: 'absolute',
                        right: '0%',
                        top: '0%',
                        padding: '9px',
                        borderRadius: '0px 10px 10px 0px',
                        cursor: 'pointer',
                      }}
                      className="current_location_complete_booking"
                    >
                      <img src={currentLocation} alt="currentLocation" />
                    </div>
                  </div>
                </Col>
                <Col lg={2} xs={12} style={{ zIndex: 10 }}>
                  <div className="from_to_container">
                    <img src={fromToIcon} alt="fromToIcon" />
                  </div>
                </Col>
                <Col lg={5} xs={12}>
                  <div className="wrapper" style={{ position: 'relative' }}>
                    <img src={dropOff} alt="dropOff" />
                    <input
                      type="text"
                      placeholder="Drop Off To (Airport, Port, Address)"
                    />
                    <div
                      style={{
                        background: 'var(--yello)',
                        position: 'absolute',
                        right: '0%',
                        top: '0%',
                        padding: '9px',
                        borderRadius: '0px 10px 10px 0px',
                        cursor: 'pointer',
                      }}
                      className="current_location_complete_booking"
                    >
                      <img src={currentLocation} alt="currentLocation" />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>

            <Row style={{ marginBottom: '2rem' }}>
              {/* passengers_luggage */}
              <Col
                lg={5}
                xs={12}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
                className="stack_luggage_passenger"
              >
                <PassengersCounter title="Passengers" completeBooking={true} />
                <LuggageCounter title="Luggage Pieces" completeBooking={true} />
              </Col>
              <Col lg={2} sm={0}></Col>
              {/* vehicle_pickup_type */}
              <Col lg={5} sm={12} style={{ alignSelf: 'flex-end' }}>
                <VehiclePickupSelect completeBooking={true} />
              </Col>
              <div className="roundtrip_checkbox_container">
                <Form.Check type="checkbox" id="checkbox" label="Round Trip" />
              </div>
            </Row>

            <EstimatedFare />

            {/* first/last name & date/time row */}
            <NameDate />
            {/* email phone row */}
            <EmailPhone />
            {/* instructions order row */}
            <InstructionsOrder />
          </div>

          <RecentTripsContainer />
        </div>
      </Container>
      <BottomNavigation />
    </>
  )
}

export default CompleteBooking
