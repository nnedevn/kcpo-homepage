import React, { Component } from "react";
// import logo from './logo.gif';
import "./App.css";
import { flatten, times, range } from "lodash";

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
    const NUMBER_OF_PARAGRAPHS = 15;
    const paragraphs = flatten(
      times(NUMBER_OF_PARAGRAPHS, index => {
        return (
          <p key={index}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            fugit explicabo magnam culpa, eaque reprehenderit velit tempore
            magni quia? Excepturi tempore, in facilis ea assumenda doloremque
            qui corporis natus quas?
          </p>
        );
      })
    );

    return (
      <div className="wrap">
        <Navbar />
        <Grid>
          <Row className="show-grid">
            <VerticalNavigation />
            <Col xs={4} md={4} className="sidebar-menu" />
            <Col xs={6} md={8} className="content">
              {paragraphs.map(paragraph => paragraph)}
            </Col>
          </Row>
        </Grid>
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;
