import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Projects = () => {

  const [projectCards] = useState([
    {
      name: "Weather Tracker",
      image: "/assets/images/weatherA.png",
      deployed: " https://anikayoka.github.io/weather-or-not/",
      github: "https://github.com/anikayoka/weather-or-not",
      description:
        "Weather dashboard application using APIs to retrieve weather data for cities worldwide.",
    },
    {
      name: "Health Buddy",
      image: "/assets/images/healthA.png",
      deployed: "https://health-buddy-group3.herokuapp.com/",
      github: "https://github.com/healthree/health-buddy",
      description:
        "An app where users can diagnose symtoms and have access to medical professionals.",
    },
    {
      name: "Budget Tracker",
      image: "./assets/images/budgetA.png",
      deployed: " https://anikayoka.github.io/weather-or-not/",
      github: "https://github.com/anikayoka/weather-or-not",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Food Festival",
      image: "/assets/images/foodA.PNG",
      deployed: "https://anikayoka.github.io/food-festival/",
      github: "https://github.com/anikayoka/food-festival",
      description:
        "Progressive Web Application (PWA) designed for a food festival.",
    },
    {
      name: "React Photo",
      image: "/assets/images/photoA.png",
      deployed: "https://anikayoka.github.io/react-photo-port/",
      github: "https://github.com/anikayoka/react-photo-port",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "DineINside",
      image: "/assets/images/dineINa.png",
      deployed: "https://weareteam8.github.io/DineInside/",
      github: "https://github.com/weareteam8/DineInside",
      description:
        "A site designed to allow users to create cocktails and meals in the comfort og their homes.",
    },
  ]);

  
  return (
    <div className="projects-container">
      <div className="projectCard d-flex">
        {projectCards.map((element, i) => (
          <Card style={{ width: "12rem" }}>
            <a href={element.deployed}>
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + element.image}
              />
            </a>
            <Card.Body>
              <Card.Title>{element.name}</Card.Title>
              <Card.Text> {element.description}</Card.Text>
              <a href={element.github}>
                <Button className="projectBtn">Github</Button>
              </a>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
