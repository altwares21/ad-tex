
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

// Pages
import Hero from './pages/Hero'
import AboutPage from './pages/About'
import MissionVisionPage from './pages/MissionVision'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/mission" element={<MissionVisionPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
