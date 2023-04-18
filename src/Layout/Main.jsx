import React from "react";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Leftnav from "../Pages/Shared/Leftnav/Leftnav";
import Rightnav from "../Pages/Shared/Rightnav/Rightnav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={3}>
            <Leftnav></Leftnav>
          </Col>
          <Col lg={6}>
            <h2>Main Content Coming.......</h2>
          </Col>
          <Col lg={3}>
            <Rightnav></Rightnav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
