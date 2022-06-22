import React from 'react'
import { Col } from 'react-bootstrap'

const WelcomeCard = ({ icon, title, description }) => {
  return (
    <Col md={3} sm={6}>
      <img src={icon} alt={title} style={{ width: '52px', height: '52px' }} />
      <p className="card_title">{title}</p>
      <p className="card_description">{description}</p>
    </Col>
  )
}

export default WelcomeCard
