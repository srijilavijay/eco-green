import React from 'react'
import ServicesCard from './ServicesCard'
import  { Container, Row } from 'react-bootstrap'
function Services1() {
  return (
    <div style={{paddingTop:"50px"}}>
      <Container>
        <Row>
          <h5 style={{color:"rgba(115,185,37,255)"}}>SERVICES</h5>
          <h3>Over <span style={{color:"rgba(115,185,37,255)"}}>40K+ </span><br/>People Working with us</h3>
        </Row>
        <Row><ServicesCard/></Row>
      </Container>
      
    </div>
  )
}

export default Services1