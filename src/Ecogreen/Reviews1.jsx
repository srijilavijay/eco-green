import React from 'react'
import ReviewsCard1 from './ReviewsCard1'

function Reviews1() {
  const bgStyle = {
    backgroundImage:`url("https://preview.colorlib.com/theme/ecogreen/images/bg_3.jpg"),linear-gradient(to bottom, #98f542, #98f542)`, 
    height:"100vh",
    backgroundColor: 'rgba(0, 0, 0, 1.5)',
    color:"white",
    backgroundPosition:"center"
    
  }
  return (
    <div style={bgStyle}>
      <ReviewsCard1/>
    </div>
  )
}

export default Reviews1