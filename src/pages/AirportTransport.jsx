import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Hero from '../components/Hero'
import '../assets/styles/airTransport.css'
import Slider from '../components/Slider'
import ATService from '../components/ATService'
import BookNow from '../components/BookNow'
import Area from '../components/Area'

import serviceImg from '../assets/images/airport-transfer-service-card-img.png'

const AirportTransport = () => {
  return (
    <Container>
      <div className="air_transport_container at_wrapper">
        <Hero />
        <Slider />

        <div className="at_service_container">
          <p className="service_des">Service</p>
          <h4 className="service_title">
            Airport <span>Transportation</span> Services
            <br /> in Sydney
          </h4>

          <ATService img={serviceImg} />
        </div>
        <BookNow />

        <div className="main_concern_container">
          <p className="main_concern_heading">
            Your Security is Our Main Concern
          </p>

          <p className="card_outside_paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
            sed eros arcu leo amet massa. Sit quis duis mauris sit elementum
            luctus consequat id. Praesent quam libero, aliquam ultrices. Enim
            quis aenean morbi feugiat vulputate. Dignissim semper vitae etiam
            mauris. Porttitor imperdiet faucibus id justo, amet nisl, elementum
            vulputate. Tristique odio odio a tortor sapien mi interdum neque.
            Nisi accumsan, fermentum feugiat dictum commodo tellus. Ipsum
            bibendum egestas nisl turpis. Sagittis, nunc volutpat, mattis id
            maecenas tristique. Laoreet quam egestas et neque dis turpis id
            malesuada id. Imperdiet porta interdum pellentesque etiam vel.
            Tincidunt viverra habitant bibendum diam dignissim venenatis tortor
            gravida. Lobortis leo egestas pulvinar feugiat a, elementum platea.
            Nec ullamcorper praesent in volutpat risus libero imperdiet
            pellentesque consectetur. Elementum vulputate tincidunt posuere in
            nulla accumsan nulla pellentesque. Adipiscing odio ut in tincidunt
            sed massa et. Nibh praesent at lacus volutpat, erat ultrices
            convallis duis nec. Porttitor scelerisque nulla nec nisl integer
            risus rutrum lacinia.
          </p>
        </div>

        <div className="main_concern_container">
          <p className="main_concern_heading">
            The Areas We Cover within Sydney? Sydeny City Airport
            <br />
            Transportation Services
          </p>

          <Row className="g-2 mt-2">
            <Area text="Airport Transportation in Albany" />
            <Area text="Airport Transportation in Mount Vernon" />
            <Area text="Airport Transportation in Albany" />
            <Area text="Airport Transportation in Mount Vernon" />
            <Area text="Airport Transportation in Albany" />
            <Area text="Airport Transportation in Mount Vernon" />
            <Area text="Airport Transportation in Albany" />
            <Area text="Airport Transportation in Mount Vernon" />
            <Area text="Airport Transportation in Albany" />
            <Area text="Airport Transportation in Mount Vernon" />
            <Area text="Airport Transportation in Albany" />
            <Area text="Airport Transportation in Mount Vernon" />
            <Area text="Airport Transportation in Albany" />
            <Area text="Airport Transportation in Mount Vernon" />
            <Area text="Airport Transportation in Albany" />
            <Area text="Airport Transportation in Mount Vernon" />
            <Area text="Airport Transportation in Albany" />
            <Area text="Airport Transportation in Mount Vernon" />
            <Area text="Airport Transportation in Albany" />
            <Area text="Airport Transportation in Mount Vernon" />
          </Row>
        </div>

        <div className="main_concern_container">
          <p className="main_concern_heading">Airport Car Services in Sydeny</p>

          <p className="card_outside_paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
            sed eros arcu leo amet massa. Sit quis duis mauris sit elementum
            luctus consequat id. Praesent quam libero, aliquam ultrices. Enim
            quis aenean morbi feugiat vulputate. Dignissim semper vitae etiam
            mauris. Porttitor imperdiet faucibus id justo, amet nisl, elementum
            vulputate. Tristique odio odio a tortor sapien mi interdum neque.
            Nisi accumsan, fermentum feugiat dictum commodo tellus. Ipsum
            bibendum egestas nisl turpis. Sagittis, nunc volutpat, mattis id
            maecenas tristique. Laoreet quam egestas et neque dis turpis id
            malesuada id. Imperdiet porta interdum pellentesque etiam vel.
            Tincidunt viverra habitant bibendum diam dignissim venenatis tortor
            gravida. Lobortis leo egestas pulvinar feugiat a, elementum platea.
            Nec ullamcorper praesent in volutpat risus libero imperdiet
            pellentesque consectetur. Elementum vulputate tincidunt posuere in
            nulla accumsan nulla pellentesque. Adipiscing odio ut in tincidunt
            sed massa et. Nibh praesent at lacus volutpat, erat ultrices
            convallis duis nec. Porttitor scelerisque nulla nec nisl integer
            risus rutrum lacinia.
          </p>
        </div>

        <BookNow />
        <br />
        <br />
      </div>
    </Container>
  )
}

export default AirportTransport
