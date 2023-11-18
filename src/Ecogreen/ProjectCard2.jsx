import React, { useState } from "react";
import { Button, Card, ProgressBar } from "react-bootstrap";

function ProjectCard2() {
  const [project, setProject] = useState([
    {
      imageUrl:
        "https://preview.colorlib.com/theme/ecogreen/images/gallery-1.jpg",
      title1: "Deforestation is the Threat to Our Ecological System",

      text1: "A small river named Duden flows by their place.",
    },
    {
      imageUrl:
        "https://preview.colorlib.com/theme/ecogreen/images/gallery-2.jpg",
      title1: "Deforestation is the Threat to Our Ecological System",

      text1: "A small river named Duden flows by their place.",
    },
  ]);
  return (
    <div style={{ display: "flex" }}>
      {project.map((display) => (
        <div style={{ display: "flex" }}>
          <Card style={{ width: "15rem" }}>
            <Card.Body>
              <Card.Title>{display.title1}</Card.Title>
              <Card.Text>{display.text1}</Card.Text>
              <Button
                style={{
                  color: "white",
                  backgroundColor: "rgba(115,185,37,255)",
                  margin: "20px",
                }}
              >
                DONATE NOW!
              </Button>
            </Card.Body>
          </Card>
          <img
            src={display.imageUrl}
            style={{ width: "15rem", height: "16rem" }}
          />
        </div>
      ))}
    </div>
  );
}

export default ProjectCard2;
