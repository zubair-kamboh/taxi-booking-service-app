import { Container } from 'react-bootstrap'
import '../assets/styles/fare.css'
import BookNow from '../components/BookNow'
import GoogleMap from '../components/GoogleMap'
import HeaderButton from '../components/HeaderButton'
import Hero from '../components/Hero'
import RecentTrips from '../components/RecentTrips'
import lineFull from '../assets/images/line-full.svg'
import middleLine from '../assets/images/middle-line.small.png'

const FarePage = () => {
  return (
    <Container>
      <div className="fair_page_container">
        <h3 className="from_to_title">
          Taxi fare from <span>Bestwood Estate</span> to{' '}
          <span>Checkers Kathu</span>
        </h3>
        <div className="form_details_container">
          <Hero farePage={true} />
        </div>

        <BookNow />
        <GoogleMap />

        {/* recent trips section */}
        <div style={{ position: 'relative' }}>
          <div className="recenttrip_container">
            <img
              src={lineFull}
              className="lineFull"
              alt="lineFull"
              style={{ width: '100%' }}
            />
            <h3
              className="recent_trip_heading"
              style={{ position: 'absolute', zIndex: '100' }}
            >
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
          <img
            src={middleLine}
            className="middleLine"
            style={{
              position: 'absolute',
              top: '0',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
            alt="middleLine"
          />

          <div style={{ display: 'flex', marginTop: '100px' }}>
            <HeaderButton title="Load More" color="#FFFFFF" bg="#F9B233" />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default FarePage
