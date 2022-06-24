import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Destinations from './Destinations'
import PassengersCounter from './PassengersCounter'

const RecentTrips = () => {
  return (
    <Row style={{ marginBottom: '1.9rem' }} className="g-2">
      <Col lg={5} sm={12}>
        <Destinations from="Bestwood Estate" to="Checkers Kathu" />
      </Col>
      <Col lg={2} sm={0}></Col>
      <Col lg={5} sm={12}>
        <Destinations
          from="20 Marine Parade"
          to="Gatwick Airport London (North Terminal)"
        />
      </Col>
    </Row>
  )
}

export default RecentTrips
