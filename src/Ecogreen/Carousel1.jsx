import React, { useState } from 'react'
import { Button, Carousel } from 'react-bootstrap'

function Carousel1() {
  const [banner, setbanner] = useState([{
    imageUrl:"./images/free-photo-of-green-world.jpeg",
    title1:"Make the World Green Again",
    text1:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
  },
  {
    imageUrl:"./images/pexels-photo-927414.jpeg",
    title1:"Help Us to Save Animals",
    text1:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
  }])
  return (
    <div>
       <Carousel data-bs-theme="light"  style={{height:"550px"}}>
        {
          banner.map((display) => (
            <Carousel.Item>
            <img
              className="d-block w-100"
              src={display.imageUrl} 
              style={{height:"550px"}}
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>{display.title1}</h1>
              <p>{display.text1}</p>
              <Button style={{backgroundColor:"rgba(115,185,37,255)", borderRadius:"0rem", marginTop:"20px"}}>Get Started &rarr;</Button>
            </Carousel.Caption>
          </Carousel.Item>
          ))
        }
     
    </Carousel>
    </div>
  )
}

export default Carousel1