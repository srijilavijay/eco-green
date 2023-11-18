import React, { useState } from "react";
import { Button, Card, ProgressBar } from "react-bootstrap";

function ProjectCard1() {
  const [project, setProject] = useState([
    {
      imageUrl: "https://preview.colorlib.com/theme/ecogreen/images/gallery-4.jpg",
      title1: "ECOLOGY",
      title2: "Ecological Friendly",
      text1: "Far from the countries Vokalia and Consonantia.",
    },
    {
      imageUrl: "https://preview.colorlib.com/theme/ecogreen/images/gallery-3.jpg",
      title1: "WATER",
      title2: "Water Pollution",
      text1: "Far from the countries Vokalia and Consonantia.",
    },
  ]);
  return (
    <div style={{ display: "flex" }}>
      {project.map((display) => (
        <div style={{ display: "flex" }}>
          <img
            src={display.imageUrl}
            style={{ width: "15rem", height: "16rem" }}
          />
          <Card style={{ width: "15rem" }}>
            <Card.Body>
              <Card.Title>{display.title1}</Card.Title>
              <Card.Title>{display.title2}</Card.Title>
              <Card.Text>{display.text1}</Card.Text>
              <ProgressBar striped variant="success"  label="70%" now={70} />
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

export default ProjectCard1;
