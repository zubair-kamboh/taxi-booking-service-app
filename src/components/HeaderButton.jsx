import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const HeaderButton = ({ color, bg, title, to }) => {
  return (
    <NavLink
      className={`navlink ${
        title === 'Book Now' ||
        title === 'Book My Ride' ||
        title === 'Get Fare' ||
        title === 'Book For Later'
          ? 'px-5'
          : 'px-4'
      } red ${title === 'Load More' ? 'loadmore_btn' : ''}`}
      to={to ? to : '/'}
      style={{
        backgroundColor: bg,
        color: color,
      }}
    >
      {title}
    </NavLink>
  )
}

export default HeaderButton
