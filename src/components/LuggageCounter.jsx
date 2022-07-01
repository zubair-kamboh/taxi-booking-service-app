import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import plus from '../assets/images/faq-plus.png'
import minus from '../assets/images/faq-minus.png'
import luggage from '../assets/images/luggage-icon.png'

const LuggageCounter = ({ title, home, completeBooking }) => {
  const [input, setInput] = useState(1)

  return (
    <Col xs={6}>
      <div
        className={`passengers_luggage_innerContainer ${
          completeBooking ? 'select_margins' : ''
        }  ${home === true ? 'ms-1' : 'ms-0'}`}
        style={{ marginLeft: home === true ? '5px !important' : '0px' }}
      >
        <p className="title">{title}</p>
        <div
          className={`wrapper ${
            completeBooking === true ? 'completeBookingCounter' : ''
          }`}
        >
          <div className="wrapper_btn">
            <img src={luggage} alt="passengerIcon" />
          </div>
          <div
            className="wrapper_btn"
            onClick={() => setInput(input - 1)}
            style={{ cursor: 'pointer' }}
          >
            <img src={minus} alt="MinusIcon" />
          </div>
          <div className="wrapper_btn">
            <input
              type="number"
              min="1"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="inputfield"
            />
          </div>
          <div
            className="wrapper_btn"
            onClick={() => setInput(input + 1)}
            style={{ cursor: 'pointer' }}
          >
            <img src={plus} alt="plusIcon" />
          </div>
        </div>
      </div>
    </Col>
  )
}

export default LuggageCounter
