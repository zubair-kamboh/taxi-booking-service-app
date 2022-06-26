import React from 'react'
import { Col } from 'react-bootstrap'

const ContactInput = ({ label, placeholder }) => {
  if (label === 'Your message*') {
    return (
      <Col xs={12}>
        <p className="input_label">{label}</p>
        <div className="input_container">
          <textarea rows="10" placeholder={placeholder} />
        </div>
      </Col>
    )
  }
  return (
    <Col lg={6} xs={12}>
      <p className="input_label">{label}</p>
      <div className="input_container">
        <input type="text" placeholder={placeholder} />
      </div>
    </Col>
  )
}

export default ContactInput
