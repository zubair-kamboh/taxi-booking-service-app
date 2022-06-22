import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import CompleteBooking from './pages/CompleteBooking'

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/complete-booking" element={<CompleteBooking />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
