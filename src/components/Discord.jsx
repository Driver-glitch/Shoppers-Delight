import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image, Container, Row, Col, Button } from "react-bootstrap";
import logo from "./images/shutterstock_112158140.jpg";

function Discord() {
  return (
    <div
      className="text-center p-1 mb-1 mb-md-0"
      style={{
        backgroundColor: "black",
        height: "100vh",
        backgroundSize: "100%",
      }}
    >
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <div className="m-5 mb-5 mt-5">
              <Button href="https://discord.gg/VNu5XbRw">
                Join Our Discord!
              </Button>
            </div>
          </Col>

          <Col className="img-fluid img-thumbnail/">
            <Image
              src={logo}
              alt="christian"
              style={{
                maxWidth: "70%",
                height: "70%",
                maxHeight: "70%",
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Discord;
