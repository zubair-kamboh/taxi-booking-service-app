import React from 'react'
import { Col, Form } from 'react-bootstrap'

const VehiclePickupSelect = ({ home, completeBooking }) => {
  return (
    <div className="vehicleType_pickup_container" style={{ width: '100%' }}>
      <Col xs={6}>
        <div className="wrapper_select" style={{ width: '100%' }}>
          <Form.Select aria-label="Default select example">
            <option>Select Vehicle Type</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
      </Col>
      <Col xs={6}>
        <div
          className={`wrapper_select ${
            completeBooking ? 'select_margins' : ''
          }`}
          style={{
            paddingLeft: '.25rem',
            width: '100%',
          }}
        >
          <Form.Select aria-label="Default select example">
            <option>Pickup Type</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
      </Col>
    </div>
  )
}

export default VehiclePickupSelect
