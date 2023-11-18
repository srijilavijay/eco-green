import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function Logobar1() {
  const logoBarStyle = {
    backgroundColor: "black",
    color: "white",
    fontSize: "14px",
  };
  const greenText = {
    color: "rgba(115,185,37,255)",
    margin: "10px 0px 0px 0px",
  };
  return (
    <div style={logoBarStyle}>
      <Container>
        <Row>
          <Col style={{ margin: "10px 0px 0px 0px" }}>
            <h4>
              ECO
              <span style={{ color: "rgba(115,185,37,255)", margin: "0px" }}>
                GREEN
              </span>
            </h4>
            <p style={{ margin: "0px", fontSize: "10px" }}>ENVIRONMENT THEME</p>
          </Col>
          <Col>
            <p style={greenText}>Email:</p>
            <p style={{ margin: "0px" }}>@info@gmail.com</p>
          </Col>
          <Col>
            <p style={greenText}>Call Us</p>
            <p style={{ margin: "0px" }}>+2 392 3929 210</p>
          </Col>
          <Col>
            <p style={greenText}>Location</p>
            <p style={{ margin: "0px" }}>San Francisco, California, USA</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Logobar1;
