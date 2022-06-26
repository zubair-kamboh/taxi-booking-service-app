import React from 'react'
import { Col } from 'react-bootstrap'

const AboutCard = ({ statsnumber, statsdetails }) => {
  return (
    <Col lg={3} xs={6}>
      <div className="card_wrapper">
        <p className="stats">{statsnumber}</p>
        <p className="stats_details">{statsdetails}</p>
      </div>
    </Col>
  )
}

export default AboutCard
