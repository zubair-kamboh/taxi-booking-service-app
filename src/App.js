import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import CompleteBooking from './pages/CompleteBooking'
import FarePage from './pages/FarePage'
import AirportTransport from './pages/AirportTransport'
import PrivateCar from './pages/PrivateCar'
import PointToPoint from './pages/PointToPoint'
import LimoService from './pages/LimoService'
import PartyLimoSine from './pages/PartyLimoSine'
import CorporateTransportation from './pages/CorporateTransportation'
import ContactUs from './pages/ContactUs'
import About from './pages/About'

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/complete-booking" element={<CompleteBooking />} />
          <Route path="/fare-page" element={<FarePage />} />
          <Route path="/airport-transport" element={<AirportTransport />} />
          <Route path="/private-car" element={<PrivateCar />} />
          <Route path="/point-to-point" element={<PointToPoint />} />
          <Route
            path="/corporate-transportation"
            element={<CorporateTransportation />}
          />
          <Route path="/limo-service" element={<LimoService />} />
          <Route path="/party-limosine" element={<PartyLimoSine />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
