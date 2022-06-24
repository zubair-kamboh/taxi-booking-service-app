import React from 'react'
import { Nav } from 'react-bootstrap'

const HeaderButton = ({ color, bg, title }) => {
  return (
    <Nav.Link
      className={`navlink ${
        title === 'Book Now' ||
        title === 'Book My Ride' ||
        title === 'Get Fare' ||
        title === 'Book For Later'
          ? 'px-5'
          : 'px-4'
      } red ${title === 'Load More' ? 'loadmore_btn' : ''}`}
      href="#bookmyride"
      style={{
        backgroundColor: bg,
        color: color,
      }}
    >
      {title}
    </Nav.Link>
  )
}

export default HeaderButton
