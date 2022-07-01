import React from 'react'
import { Col } from 'react-bootstrap'
import pickup from '../assets/images/pickup-location-icon.png'
import dropoff from '../assets/images/dropoff-location-icon.png'
import dot from '../assets/images/dot-destination-icon.png'
import line from '../assets/images/destination-horizental-line.png'
import downarrow from '../assets/images/destination-dots-down-arrow.png'
import currentLocation from '../assets/images/current-location-icon.png'

const Destinations = ({ from, to, calculator }) => {
  if (calculator) {
    return (
      <Col xs={12}>
        <div
          className="outer_hero_container_cl"
          style={{ position: 'relative' }}
        >
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
              <img
                src={downarrow}
                alt="downarrow"
                style={{ margin: '2px 0px' }}
              />
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
            <div
              style={{
                background: 'var(--yello)',
                position: 'absolute',
                right: '0%',
                top: '0%',
                padding: '11px',
                border: '1px solid #F9B233',
                borderRadius: '0px 10px 0px 0px',
                cursor: 'pointer',
              }}
            >
              <img src={currentLocation} alt="currentLocation" />
            </div>
            <div
              style={{
                background: 'var(--yello)',
                position: 'absolute',
                right: '0%',
                bottom: '0%',
                padding: '11px',
                border: '1px solid #F9B233',
                borderRadius: '0px 0px 10px 0px',
                cursor: 'pointer',
              }}
            >
              <img src={currentLocation} alt="currentLocation" />
            </div>
          </div>
        </div>
      </Col>
    )
  }
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
