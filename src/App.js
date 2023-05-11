import { BrowserRouter as Router } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

//components
import Slideshow from './components/Slideshow';
import Weather from './components/Weather'



//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>

      
        <Navbar style={{ backgroundColor: '#FFFFFF' }} expand ="lg">
          <Navbar.Brand href="/">
            <img id='brand' alt="logo" src='../logo1.png' />
          </Navbar.Brand>
          <Nav className='Nav'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/Rates'>Rates</Nav.Link>
            <Nav.Link href='/About'>About</Nav.Link>
            <Nav.Link href='/Contact'>Contact</Nav.Link>
            <Nav.Link href='/Terms'>Terms and Conditions</Nav.Link>
          </Nav>
        </Navbar>
        
      
      <div className="App">
        <div className="Slideshow">
          <Slideshow />
        </div>
        <div>
          <Weather />
        </div>
      </div>
    </Router>
  );
}




export default App;
