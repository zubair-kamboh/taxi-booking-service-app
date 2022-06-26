import React from 'react'
import { Col } from 'react-bootstrap'

const ContactCard = ({ img, title, des, callToAction }) => {
  return (
    <Col lg={4} xs={12}>
      <div className="innercard">
        <img src={img} alt={title} />
        <h4 className="title">{title}</h4>
        <p className="des">{des}</p>
        <p
          className={`callToAction ${
            title === 'Support' ? 'supportStyles' : ''
          }`}
        >
          {callToAction}
        </p>
      </div>
    </Col>
  )
}

export default ContactCard
