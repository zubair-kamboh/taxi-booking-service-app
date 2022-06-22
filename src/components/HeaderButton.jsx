import React from 'react'
import { Nav } from 'react-bootstrap'

const HeaderButton = ({ color, bg, title }) => {
  return (
    <Nav.Link
      className={`navlink ${title === 'Book Now' ? 'px-5' : 'px-4'} red`}
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
