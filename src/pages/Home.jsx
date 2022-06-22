import React from 'react'
import { Container } from 'react-bootstrap'
import Hero from '../components/Hero'
import '../assets/styles/home.css'
import WhatWeOffer from '../components/WhatWeOffer'
import ClassessAndRates from '../components/ClassessAndRates'
import BackgroundCar from '../components/BackgroundCar'
import BookNow from '../components/BookNow'
import Faq from '../components/Faq'

const Home = () => {
  return (
    <Container>
      <div className="home-container">
        <Hero />
        <WhatWeOffer />
        <BackgroundCar />
        <ClassessAndRates />
        <BookNow />
        <Faq />
      </div>
    </Container>
  )
}

export default Home
