import React, { Component } from "react";
import { flatten, times, range } from "lodash";
import { Grid, Row, Col, Image, Button, Breadcrumb } from "react-bootstrap";
import { FontAwesome } from "react-fontawesome";

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
          <Breadcrumb>
            <Breadcrumb.Item href="https://www.kingcounty.gov/">
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">Prosecuting Attorney</Breadcrumb.Item>
          </Breadcrumb>
          <Row className="show-grid">
            <Col xs={10}>
              <h1>King County Prosecuting Attorney</h1>
            </Col>
          </Row>
          {/* <Row className="show-grid">
            <Col xs={12}>
              <blockquote>
                We reduce the harm to the community but also try to restore the
                deficits in the offenders life.{" "}
              </blockquote>
            </Col>
          </Row> */}
          <Row className="show-grid">
            <Col xs={10} sm={5}>
              <h2>Community services</h2>
              <Image
                responsive
                src="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/18424055_1435990569754998_4450440117694340328_n.png?_nc_cat=0&oh=ba69af112b2fda2e69ba2baa054629b4&oe=5BBC7538"
                alt="Community Services"
              />
              <p>
                The Domestic Abuse Women's Network (DAWN) is a partner with the
                King County Prosecuting Attorney's office, and we are proud to
                work alongside them to end domestic violence.
              </p>
              <Button bsStyle="primary">See Community Programs</Button>
            </Col>
            <Col xs={10} sm={5}>
              <h2>Careers and Volunteering</h2>
              <Image
                className="team-image"
                responsive
                src="https://scontent.fsnc1-1.fna.fbcdn.net/v/t31.0-8/12657790_1049695061717886_8986899882012056349_o.jpg?_nc_cat=0&oh=b0d6a245bfb33edb4f02a958cf7d5e2d&oe=5B7D92C2"
                alt="Prosecutors Team"
              />
              <p>
                We serve our diverse community, support victims and families,
                and hold individuals accountable. We develop innovative and
                collaborative solutions for King County and the State of
                Washington.
              </p>
              <Button bsStyle="primary">
                See Career and Volunteer Opportunities
              </Button>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={10}>
              <div class="panel panel-inverse">
                <div class="panel-heading">
                  <h3 class="panel-title">The Docket</h3>
                </div>
                <div class="panel-body">
                  <p>
                    <strong>January 8, 2018:</strong>
                  </p>
                  <p>
                    <strong>
                      Charges Filed Against Employer for Worker's Trench
                      Death:&nbsp;
                    </strong>On Friday criminal&nbsp;manslaughter charges were
                    filed against Phillip Numrich, owner of Alki Construction.
                    The charges were made in connection with the death of Harold
                    Felton, an Alki Construction employee, killed as he was
                    working in a trench on a job site in West Seattle on or
                    about January 26, 2016.<span class="Apple-converted-space">
                      &nbsp;
                    </span>
                  </p>
                  <p>
                    “We alleged that the defendant’s criminal negligence caused
                    Harold Felton’s death,” said Mindy Young, senior deputy
                    prosecuting attorney for the King County Prosecuting
                    Attorney’s office. “The evidence shows an extraordinary
                    level of negligence surrounding this dangerous worksite."
                    The defendant's bail is set at $20,000. Numrich will be
                    arraigned on January 18, 2018&nbsp;in King County Superior
                    Court at 8:30 a.m.
                  </p>
                  <p>
                    <strong>November 16:&nbsp;</strong>
                  </p>
                  <p>
                    <strong>
                      Sentencing in Fatal Shooting Outside an Auburn Bar in
                      2013:{" "}
                    </strong>Sentencing is scheduled for November 17 for a Kent
                    man who was convicted in a fatal shooting outside an Auburn
                    bar in 2013. A jury last month found the defendant,
                    Cleanthony Jimerson, 32, guilty of two counts of Murder in
                    the Second Degree with firearms enhancements and one count
                    of Unlawful Possession of a Firearm in the Second Degree in
                    connection with the fatal shooting of Nicholas J. Lindsay,
                    26, and Lorenzo D. Duncan, 23. The shooting occurred during
                    a fight outside the bar on March 31, 2013.&nbsp; Jimerson
                    will be sentenced tomorrow at 10 a.m. before Judge Janet
                    Helson in courtroom 3H of the Maleng Regional Justice
                    Center. The defendant faces a sentence range of 387 to 584
                    months in prison, which includes the firearm enhancements.
                    The case was handled by Senior Deputy Prosecutors Jessica
                    Berliner and Dan Soukup. &nbsp;
                  </p>
                  <p>
                    <strong>November 2:&nbsp;</strong>
                  </p>
                  <p>
                    <strong>
                      Arraignment for Three Teens Charged in West Seattle Fatal
                      Stabbing:{" "}
                    </strong>Arraignment was held this morning for three teens
                    charged in connection with the fatal stabbing of a
                    15-year-old boy in West Seattle on September 5, 2016. The
                    defendants, Jonatan Islas-Martinez, 18, Elizabeth
                    Cabrera-Aparicio, 17, and Diego Carballo-Oliveros, 16, were
                    arraigned and pled not guilty to a charge of Murder in the
                    First Degree for the murder of Derek Juarez-Lopez. The 16
                    and 17 year-old defendants are charged as adults under
                    Washington State’s adult jurisdiction law, which allows for
                    prosecution in adult court for 16 and 17-year-old juveniles
                    who are accused of serious, violent offenses. All three
                    remain in custody with bail set at $1 million. The Court
                    scheduled a case setting hearing for November 15 at 1 p.m.
                    in 1201 of the King County Courthouse. &nbsp;
                  </p>
                  <p>
                    <strong>October 26:&nbsp;</strong>
                  </p>
                  <p />
                  <p>
                    <strong>Charges Filed in Auburn Murder: </strong>Charges
                    were filed yesterday against a 17-year-old boy who is
                    accused in a fatal stabbing in Auburn on October 22. The
                    defendant, Austin Glore, is charged as an adult with Murder
                    in the Second Degree for the alleged murder of Bryce
                    Pearson, 35. A 20-year-old co-defendant, Michael Sample, is
                    charged with Rendering Criminal Assistance in the Second
                    Degree for allegedly allowing Glore into his vehicle and
                    then driving him away from the scene. The defendants remain
                    in custody. The Court set bail at $1 million for Glore and
                    $100,000 for Sample. Both defendants will be arraigned on
                    November 6 at 9 a.m. in courtroom GA of the Maleng Regional
                    Justice Center.
                  </p>
                  <p />
                  <p>
                    <strong>SeaTac Man Charged in Wife’s Murder:</strong>{" "}
                    Charges of Murder in the First Degree and Unlawful
                    Possession of a Firearm in the Second Degree were filed on
                    Monday against Samuel R. Stills, 52, who is accused in the
                    fatal shooting of his wife, Shinelle Stills, on October 20
                    in SeaTac. The defendant allegedly shot the victim and then
                    turned the gun on himself. The defendant currently remains
                    in the hospital. After he’s released, the defendant will be
                    booked into the King County Jail. Arraignment is currently
                    scheduled for November 6 at 8:30 a.m. in courtroom 1201 of
                    the King County Courthouse. The defendant’s bail is set at
                    $2 million.&nbsp;{" "}
                  </p>
                  <p>
                    <strong>October 20:&nbsp;</strong>
                  </p>
                  <p>
                    <strong>Sentencing in Auburn Murder: </strong>Alexander
                    Joachin, 17, was sentenced this afternoon to 150 months in
                    prison for a fatal shooting in Auburn on October 7, 2016.
                    The defendant ran up to the victim, Erick Valdez-Herrera,
                    17, and shot him multiple times. The victim was unarmed and
                    sitting in his car at the time he was murdered. The
                    defendant pled guilty last month to Murder in the Second
                    Degree. Joachin, who was 16 at the time, was charged as an
                    adult under Washington State's automatic adult jurisdiction
                    law, which allows for prosecution in adult court for 16 and
                    17-year-olds who are accused of serious, violent offenses.
                    Today’s sentencing was before Judge Elizabeth Berns at the
                    Maleng Regional Justice Center. The case was handled by
                    Senior Deputy Prosecutor Mary Barbosa.&nbsp;
                  </p>
                  <p>
                    <strong>
                      Sentencing in Fatal Shooting in Pioneer Square in 2014:{" "}
                    </strong>Kenneth Bernard Jones, Jr., was sentenced this
                    afternoon to 240 months in prison for a fatal shooting on
                    September 24, 2014 at 2nd and Yesler in Seattle. The
                    defendant shot the victim, Melvin Dees, and then fled the
                    scene. Jones, 22, pled guilty last month to a charge of
                    Murder in the First Degree. Today’s sentencing was before
                    Judge Lori Kay Smith at the King County Courthouse. The case
                    was handled by Senior Deputy Prosecutor Adrienne
                    McCoy.&nbsp;&nbsp;
                  </p>
                  <p>
                    <strong>
                      Sentencing Rescheduled in Auburn Fatal Stabbing:
                    </strong>{" "}
                    Today's sentencing has been continued to January 12 for a
                    28-year-old man who pled guilty to a charge of Murder in the
                    Second Degree with a deadly weapon for the fatal stabbing of
                    a 21-year-old man in Auburn on February 18, 2016. The
                    defendant, Fritz K. Ratcliffe, was arguing with his
                    girlfriend and then fatally stabbed the woman’s son, Jaseree
                    Fountain, who had tried to help his mother. Ratcliffe faces
                    a sentence range of 158 to 258 months in prison. The January
                    12 sentencing is set for at 1:30 p.m. before Judge Cheryl
                    Carey in courtroom 3F of the Maleng Regional Justice Center.
                    The case is being handled by Senior Deputy Prosecutor Mary
                    Barbosa.{" "}
                  </p>
                  <p>&nbsp;</p>
                </div>
              </div>
            </Col>
          </Row>
          {/* <Row className="show-grid">
            <Col xs={12} md={6}>
              <div>{paragraphs.map(paragraph => paragraph)}</div>
            </Col>
            <Col xs={12} md={6}>King County Courthouse
516 Third Avenue, W400 
Seattle, WA 98104
Hours: 8:30 a.m. - 4:30 p.m
              <div>{paragraphs.map(paragraph => paragraph)}</div>
            </Col>
          </Row> */}

          <Row className="show-grid">
            <Col xs={12} sm={6}>
              <div>
                <h3>Prosecuting Attorney's Office</h3>
                <address>
                  King County Courthouse <br />
                  516 Third Avenue, W400 <br />
                  Seattle, WA 98104<br />
                  Hours: 8:30 a.m. - 4:30 p.m
                </address>
                <Button
                  bsStyle="primary"
                  href="https://www.google.com/maps/dir//516+3rd+Ave,+Seattle,+WA+98104/@47.6026638,-122.4006957,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x54906aba6e559577:0x4fbda7a312401f46!2m2!1d-122.330656!2d47.6026851"
                  aprimary
                >
                  Get directions
                </Button>
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <Grid>
                <Row>
                  <Col xs={12} sm={2}>
                    <Image className="attorney-portrait"
                      thumbnail
                      src="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/16939219_1358162700871119_3835895852560217291_n.jpg?_nc_cat=0&oh=ad015e4a7671b42e0baea0307e7a0293&oe=5BBA9D15"
                    />
                  </Col>
                  <Col xs={12} sm={10}>
                    <div>
                      <h3>Dan Satterberg</h3>

                      <h4>King County Prosecutor</h4>
                    </div>
                    <Button bsStyle="primary">Facebook</Button>
                    <Button bsStyle="primary">Twitter</Button>
                    <Button bsStyle="primary">LinkedIn</Button>
                  </Col>
                </Row>
              </Grid>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Navbar;
