import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import React from 'react'

//components
import Slideshow from './components/Slideshow';


//CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <Router>

      
        <Navbar style={{ backgroundColor: '#FFFFFF' }} expand ="lg">
          <Navbar.Brand href="/">
            <img id='brand' alt="logo" src='../logo1.png' />
          </Navbar.Brand>

        </Navbar>
        
      
      <div className="App">
        <div className="Slideshow">
          <Slideshow />
        </div>
      </div>
    </Router>
  );
}




export default App;
