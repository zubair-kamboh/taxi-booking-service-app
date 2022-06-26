import React from 'react'
import { Container } from 'react-bootstrap'
import Hero from '../components/Hero'
import '../assets/styles/airTransport.css'
import Slider from '../components/Slider'
import ATService from '../components/ATService'
import BookNow from '../components/BookNow'

// images
import PCService from '../assets/images/private-car-service.png'

const PrivateCar = () => {
  return (
    <Container>
      <div className="air_transport_container private_car_container">
        <Hero />
        <Slider />

        <div className="at_service_container">
          <p className="service_des">Service</p>
          <h4 className="service_title">
            <span>Private Car</span> Services
            <br />
            in Sydney
          </h4>

          <ATService img={PCService} />
        </div>

        <BookNow />
        <br />
      </div>
    </Container>
  )
}

export default PrivateCar
