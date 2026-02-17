import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import LandingPage from "./pages/Hero";
import AboutPage from "./pages/About";
import MissionVisionPage from "./pages/MissionVision";
import Footer from "./components/Footer";

function App() {
  return (
      <div className="min-h-screen bg-white flex flex-col">
        <Navigation />
        <main className="grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/mission" element={<MissionVisionPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
  );
}

export default App;
