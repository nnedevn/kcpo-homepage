import React, { Component } from "react";
import logo from '../logo.gif';
import {
  Nav,
  Navbar,
  NavItem,
  NavDropdown,
  MenuItem,
} from "react-bootstrap";

class NavigationBar extends Component {
  render() {
    return (
      <Navbar inverse fluid>
        <Navbar.Header>
          <Navbar.Brand >
            <a href="https://www.kingcounty.gov/">
              <img src={logo} alt=""/>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem className="navbar-item" eventKey={1} href="https://www.kingcounty.gov/">
              Home
            </NavItem>
            <NavItem className="navbar-item" eventKey={2} href="https://www.kingcounty.gov/how-do-i.aspx">
              How do I...
            </NavItem>
            <NavItem className="navbar-item" eventKey={3} href="https://www.kingcounty.gov/services.aspx">
              Services
            </NavItem>
            <NavItem className="navbar-item" eventKey={4} href="https://www.kingcounty.gov/about.aspx">
              About King County
            </NavItem>   
            <NavItem eventKey={4} href="https://www.kingcounty.gov/depts.aspx">
              Departments
            </NavItem> 
            <NavItem className="navbar-item" eventKey={5}>
            <span class="glyphicon glyphicon-search"></span>
            </NavItem>
          </Nav>        
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;
