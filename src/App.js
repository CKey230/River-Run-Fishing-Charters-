import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import React from 'react'
import RRFC2 from '../src/images/RRFC2.jpg'
import Slideshow from './components/Slideshow';



function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={RRFC2} className="App-logo" alt="logo" />
          <div className="contact-info">
          <h1>Capt. Kaleb Frink </h1>
          <h2>USCG licensed</h2>
          <h3>Oak Island, NC</h3>
          <h3>Phone: 716-640-1896</h3>
          <h3>Email: Riverrunfishingcharters@gmail.com</h3>
          </div>
        </header>
        <div className="Slideshow">
          <Slideshow />
        </div>
      </div>
    </Router>
  );
}




export default App;
