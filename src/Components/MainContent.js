import React, { Component } from "react";
import { flatten, times, range } from "lodash";
import { Grid, Row, Col } from "react-bootstrap";

class Navbar extends Component {
  render() {
    //used to generate placeholder content
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
      <div className="main-content">
        <div>{/* {paragraphs.map(paragraph => paragraph)} */}</div>
        <div className="main-content-news">
          <p>hello</p>
        </div>
      </div>
    );
  }
}

export default Navbar;
