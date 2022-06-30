import React from 'react'
import { Col, Row } from 'react-bootstrap'
import PassengersCounter from './PassengersCounter'

const InstructionsOrder = () => {
  return (
    <Row style={{ marginBottom: '2rem' }}>
      <Col lg={5} xs={12}>
        <PassengersCounter title="Additional Instructions" />
      </Col>
      <Col lg={2} xs={0}></Col>
      <Col lg={5} xs={12} style={{ display: 'flex' }}>
        <PassengersCounter title="Order Summary" />
      </Col>
    </Row>
  )
}

export default InstructionsOrder
