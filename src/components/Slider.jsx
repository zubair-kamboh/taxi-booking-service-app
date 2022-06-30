import React from 'react'
import { Carousel } from 'react-bootstrap'
import sliderImage1 from '../assets/images/slider-image-1.png'
import sliderImage2 from '../assets/images/slider-image-2.png'
import sliderImage3 from '../assets/images/slider-image-3.png'
import sliderImage4 from '../assets/images/slider-image-4.png'
import sliderImage5 from '../assets/images/slider-image-5.png'

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
          <img className="d-block w-100" src={sliderImage1} alt="First slide" />
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
          <img className="d-block w-100" src={sliderImage2} alt="2nd slide" />
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
          <img className="d-block w-100" src={sliderImage3} alt="3rd slide" />
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
          <img className="d-block w-100" src={sliderImage4} alt="4th slide" />
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
          <img className="d-block w-100" src={sliderImage5} alt="5th slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Slider
