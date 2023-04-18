import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button } from "bootstrap";
import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container>
      <div className="text-center">
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
    </Container>
  );
};

export default Header;
