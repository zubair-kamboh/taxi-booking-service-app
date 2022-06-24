import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import PassengersCounter from './PassengersCounter'

const InstructionsOrder = () => {
  return (
    <Row style={{ marginBottom: '2rem' }}>
      <Col lg={5} sm={12}>
        <PassengersCounter title="Additional Instructions" />
      </Col>
      <Col lg={2} sm={0}></Col>
      <Col lg={5} sm={12} style={{ display: 'flex' }}>
        <PassengersCounter title="Order Summary" />
      </Col>
    </Row>
  )
}

export default InstructionsOrder
