import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import LandingPage from './components/header'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutPage from './components/About';


function App() {
  return (
    <Router>
      <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen text-white font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/About" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
