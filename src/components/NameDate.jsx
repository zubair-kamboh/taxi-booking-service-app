import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import LuggageCounter from './LuggageCounter'
import PassengersCounter from './PassengersCounter'

const NameDate = () => {
  return (
    <Row style={{ marginBottom: '2rem' }}>
      <Col lg={5} sm={12} style={{ display: 'flex' }}>
        <PassengersCounter title="First Name" />
        <PassengersCounter title="Last Name" />
      </Col>
      <Col lg={2} sm={0}></Col>
      <Col lg={5} sm={12} style={{ display: 'flex' }}>
        <PassengersCounter title="Date" />
        <PassengersCounter title="Time" />
      </Col>
    </Row>
  )
}

export default NameDate
