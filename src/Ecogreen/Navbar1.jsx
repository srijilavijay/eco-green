import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

function Navbar1() {
  const navBarStyle = {
    color: "white",
    fontWeight: "400",
    padding: "20px",
  };
  const donateStyle = {
    backgroundColor: "white",
    color: "black",
    borderRadius: "0rem",
    height: "70px",
    width: "250px",
    margin: "0px",
  }
  return (
    <div>
      <Navbar
        expand="lg"
        className=""
        style={{ backgroundColor: "rgba(115,185,37,255)", padding: "0px", margin:"0px" }}
      >
        <Container style={{margin:"0px"}}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" style={navBarStyle}>
                Home
              </Nav.Link>
              <Nav.Link href="#link" style={navBarStyle}>
                About
              </Nav.Link>
              <Nav.Link href="#link" style={navBarStyle}>
                Services
              </Nav.Link>
              <Nav.Link href="#link" style={navBarStyle}>
                Projects
              </Nav.Link>
              <Nav.Link href="#link" style={navBarStyle}>
                Blog
              </Nav.Link>
              <Nav.Link href="#link" style={navBarStyle}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Button
            style={donateStyle}
          >
            Donate Now
          </Button>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbar1;
