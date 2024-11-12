import { useState } from 'react'

import './App.css'
import LandingPage from './components/header'
import Explore from './components/Explore'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
  
  return (
    <>
      <div>
        <LandingPage />
        <Explore />

      </div>
    </>
  )
}

export default App
