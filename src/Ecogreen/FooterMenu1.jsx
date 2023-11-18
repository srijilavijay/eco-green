import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

function FooterMenu1() {
  return (
    <div style={{backgroundImage:`url("./images/pexels-photo-1002703.jpeg") `, color:"white", padding:"20px"}}>
       <Container>
      <Row>
        <Col>
        <h4>
              ECO
              <span style={{ color: "rgba(115,185,37,255)", margin: "0px" }}>
                GREEN
              </span>
            </h4>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          </Col>
        <Col>
          <h4>Services</h4>
          <p>&rarr;Recycling</p>
          <p>&rarr;Water Refine</p>
          <p>&rarr;Ecosystem</p>
          <p>&rarr;Solar Energy</p>
          </Col>
        <Col>
        <br /><br />
          <p>&rarr;Save Animals</p>
          <p>&rarr;Plant Ecology</p>
          <p>&rarr;Dynamic Ecology</p>
          <p>&rarr;Tree Planting</p>
        </Col>
        <Col>
          <h4>Recent Posts</h4>
          <p>Ecological System Responsible for Green Energy</p>
          
          <p>Ecological System Responsible for Green Energy</p>
        </Col>
        <Col>
          <h4>Have a Questions?</h4>
          <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
          <p>+2 392 3929 210</p>
          <p>info@yourdomain.com</p>
        </Col>
        
      </Row>
    </Container>
    </div>
  )
}

export default FooterMenu1