import React from 'react'
import '../assets/styles/bottomNavigation.css'

import home from '../assets/images/bottom-navigation-home-icon.png'

const BottomNavigation = () => {
  return (
    <div className="bottom_navigation_container">
      <div className="home">
        <img src={home} alt="home icon" />
        <p>Home</p>
      </div>

      <button className="btn1">Book For Later</button>
      <button className="btn2">Book Now</button>

      <div className="fare_container">
        <p className="your_trip_fare">Your Trip Fare</p>
        <div className="price_wrapper">
          <p className="price">$109.0</p>
          <p className="total_price">Total Price</p>
          <p className="taxes">Taxes & Fees Included</p>
        </div>
      </div>
    </div>
  )
}

export default BottomNavigation
