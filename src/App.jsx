import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import Contact from './Pages/Contact.jsx';
import About from './Pages/Gallary.jsx';
import Home from './Pages/Home.jsx';
import Trainer from './Pages/Services.jsx';

import './App.css';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary position-sticky top-0 start-0 w-100 ">
        <div className="container justify-content-between w-100">
          <h1 className="navbar-brand fs-1 fw-bold">Cake_Cravings</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav py-3">
              <li className="nav-item px-4">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item px-4">
                <Link className="nav-link" to="/Gallary">
                  Gallary
                </Link>
              </li>
              <li className="nav-item px-4">
                <Link className="nav-link" to="/Services">
                  Services
                </Link>
              </li>
              <li className="nav-item px-4">
                <Link className="nav-link" to="/Contact">
                  Contact Us
                </Link>
              </li>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gallary" element={<About />} />
        <Route path="/Services" element={<Trainer />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
