import React from 'react'
import {Button} from 'react-bootstrap'

function Newsletter1() {
  const bgStyle = {
    backgroundImage:`url("https://preview.colorlib.com/theme/ecogreen/images/bg_3.jpg"),linear-gradient(to bottom, #98f542, #98f542)`, 
    height:"100vh",
    backgroundColor: 'rgba(0, 0, 0, 1.5)',
    color:"white",
    backgroundPosition:"center",
    padding:"100px"
  }
  return (
    <div style={bgStyle}>
      <p>NEWSLETTER</p>
      <h2>Subscribe for Newsletter</h2> 
      <Button
                style={{
                  color: "rgba(115,185,37,255)",
                  backgroundColor: "white",
                  margin:"20px",
                  border:"2px solid rgba(115,185,37,255)"
                }}
              >
                SUBSCRIBE NOW!
              </Button>
    </div>
  )
}

export default Newsletter1