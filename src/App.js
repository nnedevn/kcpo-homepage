import React, { Component } from "react";
// import logo from './logo.gif';
import "./App.css";
import { flatten, times } from "lodash";

//Component Imports
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import MainContent from "./Components/MainContent";
import { Grid, Row, Col } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const NUMBER_OF_PARAGRAPHS = 5;
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
      <div className="App">
        <Navbar />
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              {paragraphs.map(paragraph => paragraph)}
            </Col>
            <Col xs={6} md={4}>
              <code>&lt;{"Col xs={6} md={4}"} /">">">&gt;</code>
            </Col>
          </Row>
        </Grid>
        <Sidebar />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;
