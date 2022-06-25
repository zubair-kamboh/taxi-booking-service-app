import React from 'react'
import { Carousel } from 'react-bootstrap'
import sliderImageOne from '../assets/images/slider-image-1.png'

const Slider = () => {
  return (
    <div className="slider_container">
      <h4 className="fleets_heading">
        OUR <span>FLEETS</span>
      </h4>

      <Carousel indicators={false}>
        <Carousel.Item style={{ position: 'relative' }}>
          <Carousel.Caption style={{ top: '1.25rem' }}>
            <p
              style={{
                fontWeight: '600',
                fontSize: '28px',
                color: '#FFFFFF',
              }}
            >
              Sedan
            </p>
          </Carousel.Caption>
          <img
            className="d-block w-100"
            src={sliderImageOne}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item style={{ position: 'relative' }}>
          <Carousel.Caption style={{ top: '1.25rem' }}>
            <p
              style={{
                fontWeight: '600',
                fontSize: '28px',
                color: '#FFFFFF',
              }}
            >
              Sedan
            </p>
          </Carousel.Caption>
          <img
            className="d-block w-100"
            src={sliderImageOne}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Slider
