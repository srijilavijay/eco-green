import React from 'react'
import ProjectCard1 from './ProjectCard1'
import ProjectCard2 from './ProjectCard2'
import { Container, Row } from 'react-bootstrap'

function Project1() {
  return (
    <div style={{margin:"50px"}}>
      <Container>
        <Row style={{padding:"20px"}}>
          <h5 style={{color:"rgba(115,185,37,255)"}}>PROJECT</h5>
          <h3>Our Campaign</h3>
        </Row>
        <Row><ProjectCard1/></Row>
        <Row><ProjectCard2/></Row>
      </Container>
    
    </div>
  )
}

export default Project1