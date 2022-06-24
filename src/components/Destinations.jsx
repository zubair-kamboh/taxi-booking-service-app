import React from 'react'
import { Col } from 'react-bootstrap'
import pickup from '../assets/images/pickup-location-icon.png'
import dropoff from '../assets/images/dropoff-location-icon.png'
import dot from '../assets/images/dot-destination-icon.png'
import line from '../assets/images/destination-horizental-line.png'
import downarrow from '../assets/images/destination-dots-down-arrow.png'

const Destinations = ({ from, to }) => {
  return (
    <Col xs={12}>
      <div className="destinations_container">
        <div className="left">
          <img
            src={pickup}
            alt="pickup"
            style={{ width: '11.46px', height: '14.64px' }}
          />
          <img src={dot} alt="dot" className="dot" />
          <img src={dot} alt="dot" className="dot" />
          <img src={dot} alt="dot" className="dot" />
          <img src={dot} alt="dot" className="dot" />
          <img src={dot} alt="dot" className="dot" />
          <img src={dot} alt="dot" className="dot" />
          <img src={dot} alt="dot" className="dot" />
          <img src={dot} alt="dot" className="dot" />
          <img src={dot} alt="dot" className="dot" />
          <img src={downarrow} alt="downarrow" style={{ margin: '2px 0px' }} />
          <img
            src={dropoff}
            alt="dropoff"
            style={{ width: '14.64px', height: '15.43px' }}
          />
        </div>
        <div className="right">
          <p className="from">{from}</p>
          <img src={line} alt="line" />
          <p className="to">{to}</p>
        </div>
      </div>
    </Col>
  )
}

export default Destinations
