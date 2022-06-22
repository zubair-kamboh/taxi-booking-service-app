import React from 'react'
import { Row } from 'react-bootstrap'
import WhatWeOfferCard from './WhatWeOfferCard'

// icons
import addressPickup from '../assets/images/addresspickup.png'
import airportTranfer from '../assets/images/airport-transfer.png'
import longDistance from '../assets/images/long-distance.png'
import taxiTours from '../assets/images/taxi-tours.png'

const WhatWeOffer = () => {
  return (
    <div className="welcome_container">
      <h5 className="what_we_offer">WHAT WE OFFER</h5>
      <h3 className="welcome_to_us">WELCOME TO US</h3>
      <p className="description">
        Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English.
      </p>
      <Row>
        <WhatWeOfferCard
          icon={addressPickup}
          title="Address Pickup"
          description="Lorem Ipsum is that it has a more-or- of letters"
        />
        <WhatWeOfferCard
          icon={airportTranfer}
          title="Airport Transfer"
          description="Lorem Ipsum is that it has a more-or- of letters"
        />
        <WhatWeOfferCard
          icon={longDistance}
          title="Long Distance"
          description="Lorem Ipsum is that it has a more-or- of letters"
        />
        <WhatWeOfferCard
          icon={taxiTours}
          title="Taxi Tours"
          description="Lorem Ipsum is that it has a more-or- of letters"
        />
      </Row>
    </div>
  )
}

export default WhatWeOffer
