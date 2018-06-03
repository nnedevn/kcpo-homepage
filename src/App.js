import React, { Component } from "react";
// import logo from './logo.gif';
import "./App.css";

//Component Imports
import Navbar from "./Components/Navbar";
import VerticalNavigation from "./Components/VerticalNavigation";
import Footer from "./Components/Footer";
import MainContent from "./Components/MainContent";
import { Grid, Row, Col } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
  
    return (
      <div className="wrap">
        <Navbar />
        <Grid>
          <Row className="show-grid">
            <VerticalNavigation />
            {/* <Col xs={4} md={4} className="sidebar-menu">

            </Col> */}
            <Col xs={6} md={8} className="content">
            <MainContent />
            </Col>
          </Row>
        </Grid>
        
        <Footer />
      </div>
    );
  }
}

export default App;
