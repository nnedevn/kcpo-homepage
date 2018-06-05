import React, { Component } from "react";
import { flatten, times, range } from "lodash";
import { Grid, Row, Col, Image } from "react-bootstrap";

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
        {/* <div>{paragraphs.map(paragraph => paragraph)}</div>
        <div className="main-content-news">
          <p>hello</p>
        </div> */}
        <Grid>
          <p>Here goes a breadcrumb.</p>
          <Row className="show-grid">
            <Col xs={12}>
              <h1>King County Prosecuting Attorney</h1>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12}>
              <blockquote>We reduce the harm to the community but also try to restore the deficits in the offenders life. </blockquote>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} sm={6}>
              <h2>Community services</h2>
              <Image responsive
                src="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/18424055_1435990569754998_4450440117694340328_n.png?_nc_cat=0&oh=ba69af112b2fda2e69ba2baa054629b4&oe=5BBC7538"
                alt="Prosecutors Team"
              />
            </Col>
            <Col xs={12} sm={6}>
              <h2>Join our team!</h2>
              <Image responsive
                src="https://scontent.fsnc1-1.fna.fbcdn.net/v/t31.0-8/12657790_1049695061717886_8986899882012056349_o.jpg?_nc_cat=0&oh=b0d6a245bfb33edb4f02a958cf7d5e2d&oe=5B7D92C2"
                alt="Prosecutors Team"
              />
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} md={6}>
              <div>{paragraphs.map(paragraph => paragraph)}</div>
            </Col>
            <Col xs={12} md={6}>
              <div>{paragraphs.map(paragraph => paragraph)}</div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Navbar;
