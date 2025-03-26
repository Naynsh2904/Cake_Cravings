import React, { useEffect } from 'react';

import './App.css';

import AOS from 'aos';
import About from './Component/about.jsx';
import Contact from './Component/Contact.jsx';
import Dishes from './Component/Dishes.jsx';
import Hero from './Component/Hero.jsx';
import Map from './Component/Map.jsx';
import Navbar from './Component/Navbar.jsx';
import Price from './Component/Price.jsx';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Dishes />
      <Price />
      <Contact />
      <Map />
    </>
  );
}

export default App;
