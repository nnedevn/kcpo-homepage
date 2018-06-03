import React, { Component } from 'react';
// import logo from './logo.gif';
import './App.css';

//Component Imports

import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import MainContent from './Components/MainContent';

import Button from 'react-bootstrap/lib/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
        <Navbar></Navbar>
        <Sidebar>
        </Sidebar>
        <MainContent></MainContent>
        <Footer></Footer>
      </div>

      
    );
  }
}

export default App;
