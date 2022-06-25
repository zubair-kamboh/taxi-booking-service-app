import React from 'react'
import { Col } from 'react-bootstrap'

const Area = ({ text }) => {
  return (
    <Col lg={6} xs={12}>
      <div className="area_wrapper">
        <p>{text}</p>
      </div>
    </Col>
  )
}

export default Area
