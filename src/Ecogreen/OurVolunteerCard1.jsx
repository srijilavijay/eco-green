import React, { useState } from "react";
import { Card } from "react-bootstrap";
function OurVolunteerCard1() {
  const [volunteers, setVolunteers] = useState([
    {
      imageUrl:
        "https://preview.colorlib.com/theme/ecogreen/images/staff-1.jpg",
      cardTitle: "Jason Smith",
      cardText:
        "I am an ambitious workaholic, but apart from that, pretty simple person.",
    },
    {
      imageUrl:
        "https://preview.colorlib.com/theme/ecogreen/images/staff-2.jpg",
      cardTitle: "Jeffrey Rockenson",
      cardText:
        "I am an ambitious workaholic, but apart from that, pretty simple person.",
    },
    {
      imageUrl:
        "https://preview.colorlib.com/theme/ecogreen/images/staff-3.jpg",
      cardTitle: "Jason Smith",
      cardText:
        "I am an ambitious workaholic, but apart from that, pretty simple person.",
    },
    {
      imageUrl:
        "https://preview.colorlib.com/theme/ecogreen/images/staff-4.jpg",
      cardTitle: "Jason Smith",
      cardText:
        "I am an ambitious workaholic, but apart from that, pretty simple person.",
    },
  ]);
  const staffImage = {
    border: "5px solid rgba(115,185,37,255)",
    borderRadius: "5rem 0rem 5rem 5rem",
    width: "150px",
    marginLeft: "20px",
  };
  const volunteerCardStyle = { width: "12rem", marginLeft: "20px" };
  return (
    <div style={{ display: "flex", margin: "50px 100px" }}>
      {volunteers.map((display) => (
        <Card style={volunteerCardStyle}>
          <img src={display.imageUrl} style={staffImage} />
          <Card.Body>
            <Card.Title>{display.cardTitle}</Card.Title>
            <p style={{ color: "rgba(115,185,37,255)", fontSize: "12px" }}>
              <b>VOLUNTEER</b>
            </p>
            <Card.Text>{display.cardText}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default OurVolunteerCard1;
