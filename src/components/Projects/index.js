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
      name: "Code Quiz",
      image: "/assets/images/quiz.png",
      deployed: " https://anikayoka.github.io/code-quiz/",
      github: "https://github.com/anikayoka/code-quiz",
      description:
        "A timed quiz application built with CSS, HTML, JavaScript & web APIs that tests users' coding knowledge.",
    },
    {
      name: "Food Festival",
      image: "/assets/images/foodA.png",
      deployed: "https://anikayoka.github.io/food-festival/",
      github: "https://github.com/anikayoka/food-festival",
      description:
        "Progressive Web Application (PWA) designed for patrons of a food festival, allowing offline capabilities.",
    },
    {
      name: "Pet Stuff Plus",
      image: "/assets/images/pets.png",
      deployed: "https://petstuffplus.herokuapp.com",
      github: "https://github.com/project0301/paws",
      description:
        "An e-commerce pet marketplace where users can create accounts to buy & sell new or used pet supplies.",
    },
    {
      name: "DineINside",
      image: "/assets/images/dineINa.png",
      deployed: "https://weareteam8.github.io/DineInside/",
      github: "https://github.com/weareteam8/DineInside",
      description:
        "A site designed to allow users to create cocktails and meals in the comfort of their homes.",
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
