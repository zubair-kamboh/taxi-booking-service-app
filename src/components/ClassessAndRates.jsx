import React from 'react'
import { Row } from 'react-bootstrap'
import ClassesAndRatesCard from './ClassesAndRatesCard'
import carIcon from '../assets/images/choose-your-car-icon.svg'

const ChooseYourCar = () => {
  return (
    <div className="welcome_container classes_rates_container">
      <h5 className="what_we_offer">CAR CLASSES AND RATES</h5>
      <h3 className="welcome_to_us">CHOOSE YOUR CAR</h3>

      <Row className="my-5 g-2">
        <ClassesAndRatesCard
          icon={carIcon}
          title="WAGON"
          description="Lorem Ipsum is that it has a more-or- of letters"
          price="$2.5/mi"
        />
        <ClassesAndRatesCard
          icon={carIcon}
          title="WAGON"
          description="Lorem Ipsum is that it has a more-or- of letters"
          price="$2.5/mi"
        />
        <ClassesAndRatesCard
          icon={carIcon}
          title="WAGON"
          description="Lorem Ipsum is that it has a more-or- of letters"
          price="$2.5/mi"
        />
        <ClassesAndRatesCard
          icon={carIcon}
          title="WAGON"
          description="Lorem Ipsum is that it has a more-or- of letters"
          price="$2.5/mi"
        />
      </Row>
    </div>
  )
}

export default ChooseYourCar
