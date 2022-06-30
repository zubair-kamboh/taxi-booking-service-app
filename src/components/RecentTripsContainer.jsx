import React from 'react'
import HeaderButton from './HeaderButton'
import RecentTrips from './RecentTrips'
import lineFull from '../assets/images/line-full.svg'
import middleLine from '../assets/images/middle-line.svg'

const RecentTripsContainer = () => {
  return (
    <div>
      <div className="recenttrip_container">
        <img
          src={lineFull}
          className="lineFull"
          alt="lineFull"
          style={{ width: '100%' }}
        />
        <h3 className="recent_trip_heading">
          Recent Trips <span>Book</span>ed Near You!
        </h3>
        <img
          src={lineFull}
          className="lineFull"
          alt="lineFull"
          style={{ width: '100%', margin: '50px 0px 20px 0px' }}
        />
      </div>
      <RecentTrips />
      <RecentTrips />
      <RecentTrips />
      <RecentTrips />
      <RecentTrips />

      <div className="d-flex">
        <HeaderButton title="Load More" color="#FFFFFF" bg="#F9B233" />
      </div>
    </div>
  )
}

export default RecentTripsContainer
