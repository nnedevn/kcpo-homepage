import React, { Component } from "react";
import { flatten, times, range } from "lodash";

class Navbar extends Component {
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
      <div>
        {paragraphs.map(paragraph => paragraph)}
      </div>
    );
  }
}

export default Navbar;
