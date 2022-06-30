import React from 'react'
import { Col, Row } from 'react-bootstrap'
import PassengersCounter from './PassengersCounter'

const NameDate = () => {
  return (
    <Row style={{ marginBottom: '2rem' }}>
      <Col lg={5} xs={12} style={{ display: 'flex' }}>
        <PassengersCounter title="First Name" />
        <PassengersCounter title="Last Name" />
      </Col>
      <Col lg={2} xs={0}></Col>
      <Col
        lg={5}
        xs={12}
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        className="stack_luggage_passenger"
      >
        <PassengersCounter title="Date" />
        <PassengersCounter title="Time" />
      </Col>
    </Row>
  )
}

export default NameDate
