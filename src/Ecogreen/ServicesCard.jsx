import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'

function ServicesCard() {
  const [service, setservice] = useState([{
    imageUrl:"",
    title1:"Recyling",
    text1:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
  },
  {
    imageUrl:"",
    title1:"Water Refine",
    text1:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
  },
  {
    imageUrl:"",
    title1:"Ecosystem",
    text1:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
  },
  {
    imageUrl:"",
    title1:"Solar Energy",
    text1:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
  },
  {
    imageUrl:"",
    title1:"Save Animals",
    text1:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
  },
])
const buttonStyle = {

}
  return (
    <div style={{display:"flex"}}>
      {service.map((display)=>(
        <Card style={{ width: '10rem', margin:"10px", boxShadow:"10px 10px 10px grey" }}>
        <Card.Img variant="top" src={display.imageUrl} />
        <Card.Body>
          <Card.Title>{display.title1}</Card.Title>
          <Card.Text>
            {display.text1}
          </Card.Text>
          <Button style={{color:"white", backgroundColor:"rgba(115,185,37,255)"}}>See more</Button>
        </Card.Body>
      </Card>

      ))}
      
    </div>
  )
}

export default ServicesCard