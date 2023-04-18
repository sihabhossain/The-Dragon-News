import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button } from "bootstrap";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container>
      <div className="text-center mt-5">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favor</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>

      <div className="d-flex">
        <button type="button" className="btn btn-danger">
          Latest
        </button>
        <Marquee className="text-danger" speed={80}>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as. Match Highlights: Brazil vs Argentina
          — as it happened ! Match Highlights: Brazil vs Argentina as. Match
          Highlights: Germany vs Spain — as it happened ! Match Highlights:
          Germany vs Spain as they lost.
        </Marquee>
      </div>

      {/* NAVBAR CODE */}

      <div className="mb-3 mt-3">
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
                <Nav.Link href="#pricing">Career</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">Profile</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  <button type="button" class="btn btn-secondary">
                    Login
                  </button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </Container>
  );
};

export default Header;
