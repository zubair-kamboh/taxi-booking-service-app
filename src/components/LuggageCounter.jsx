import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import passengerIcon from '../assets/images/passengers-icon.png'
import plus from '../assets/images/faq-plus.png'
import minus from '../assets/images/faq-minus.png'
import luggage from '../assets/images/luggage-icon.png'

const LuggageCounter = () => {
  const [input, setInput] = useState(1)

  return (
    <Col sm={6}>
      <div className="passengers_luggage_innerContainer ms-3">
        <p className="title">Luggage Pieces</p>
        <div className="wrapper">
          <div className="wrapper_btn">
            <img src={luggage} alt="passengerIcon" />
          </div>
          <div className="wrapper_btn">
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
          <div className="wrapper_btn">
            <img src={plus} alt="plusIcon" />
          </div>
        </div>
      </div>
    </Col>
  )
}

export default LuggageCounter
