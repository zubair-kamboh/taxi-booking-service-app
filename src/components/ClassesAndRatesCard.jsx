import React from 'react'
import { Col } from 'react-bootstrap'

const ChooseYourCarCard = ({ icon, title, description, price }) => {
  return (
    <Col md={3} sm={6}>
      <div className="classes_rates_card">
        <img src={icon} alt={title} className="img-fluid" />
        <p className="card_title">{title}</p>
        <p className="card_description">{description}</p>
        <p className="price">{price}</p>
      </div>
    </Col>
  )
}

export default ChooseYourCarCard
