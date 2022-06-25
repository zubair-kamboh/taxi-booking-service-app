import React from 'react'
import { Col } from 'react-bootstrap'
import HeaderButton from './HeaderButton'

const WelcomeCard = ({ icon, title, description }) => {
  return (
    <Col lg={4} xs={12}>
      <div className="whatweoffer_card_wrapper">
        <img src={icon} alt={title} />
        <div className="wrapper">
          <p className="card_title">{title}</p>
          <p className="card_description">{description}</p>
          <button>Book Now</button>
        </div>
      </div>
    </Col>
  )
}

export default WelcomeCard
