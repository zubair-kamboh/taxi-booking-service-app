import React from 'react'
import { Row } from 'react-bootstrap'
import WhatWeOfferCard from './WhatWeOfferCard'

// icons
import airTransfer from '../assets/images/airport-transfer.png'
import privateCar from '../assets/images/private-car.png'
import point from '../assets/images/point-to-point.png'
import corp from '../assets/images/corp.png'
import limo from '../assets/images/limo.png'
import partyLimosine from '../assets/images/party-lemosine.png'

const WhatWeOffer = () => {
  return (
    <div className="welcome_container welcome_specific">
      <h5 className="what_we_offer">WHAT WE OFFER</h5>
      <h3 className="welcome_to_us">WELCOME TO US</h3>
      <p className="description">
        Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English.
      </p>
      <Row className="g-2">
        <WhatWeOfferCard
          icon={airTransfer}
          title="Airport Transportation"
          description="Amet minim mollit non deserunt ullamco est sit ewv."
        />
        <WhatWeOfferCard
          icon={privateCar}
          title="Private Car"
          description="Amet minim mollit non deserunt ullamco est sit ewv."
        />
        <WhatWeOfferCard
          icon={point}
          title="Point to Point"
          description="Amet minim mollit non deserunt ullamco est sit ewv."
        />
        <WhatWeOfferCard
          icon={corp}
          title="Corp. Transportation"
          description="Amet minim mollit non deserunt ullamco est sit ewv."
        />
        <WhatWeOfferCard
          icon={limo}
          title="Limo Service"
          description="Amet minim mollit non deserunt ullamco est sit ewv."
        />
        <WhatWeOfferCard
          icon={partyLimosine}
          title="Party Limousine"
          description="Amet minim mollit non deserunt ullamco est sit ewv."
        />
      </Row>
    </div>
  )
}

export default WhatWeOffer
