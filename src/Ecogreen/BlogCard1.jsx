import React, { useState } from 'react'
import {Card, Button} from 'react-bootstrap'

function BlogCard1() {
  const [blog, setBlog] = useState([
    {
      imageUrl: "https://preview.colorlib.com/theme/ecogreen/images/image_2.jpg",
      title1: "Deforestation is the Threat to Our Ecological System",
      text1: "A small river named Duden flows by their place.",
    },
    {
      imageUrl: "https://preview.colorlib.com/theme/ecogreen/images/image_4.jpg",
      title1: "Deforestation is the Threat to Our Ecological System",
      text1: "A small river named Duden flows by their place.",
    },
  ]);
  return (
    <div style={{ display: "flex", margin:"20px" }}>
      {blog.map((display) => (
        <div style={{ display: "flex" }}>
          <img
            src={display.imageUrl}
            style={{ width: "15rem", height: "16rem" }}
          />
          <Card style={{ width: "15rem" }}>
            <Card.Body>
              <Card.Title>{display.title1}</Card.Title>
              <Card.Text>{display.text1}</Card.Text>
              <Button
                style={{
                  color: "white",
                  backgroundColor: "rgba(115,185,37,255)",
                  margin:"20px"
                }}
              >
                DONATE NOW!
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default BlogCard1