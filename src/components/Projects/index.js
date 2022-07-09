import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Projects = () => {

  const [projectCards] = useState([
    {
      name: "Weather Tracker",
      image: "/assets/commercial.PNG",
      deployed: " https://anikayoka.github.io/weather-or-not/",
      github: "https://github.com/anikayoka/weather-or-not",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Health Buddy",
      image: "/assets/commercial.PNG",
      deployed: " https://anikayoka.github.io/weather-or-not/",
      github: "https://github.com/anikayoka/weather-or-not",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Budget Tracker",
      image: "/assets/commercial.PNG",
      deployed: " https://anikayoka.github.io/weather-or-not/",
      github: "https://github.com/anikayoka/weather-or-not",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Food Festival",
      image: "/assets/commercial.PNG",
      deployed: " https://anikayoka.github.io/weather-or-not/",
      github: "https://github.com/anikayoka/weather-or-not",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Scheduler",
      image: "/assets/commercial.PNG",
      deployed: " https://anikayoka.github.io/weather-or-not/",
      github: "https://github.com/anikayoka/weather-or-not",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "DineINside",
      image: "/assets/commercial.PNG",
      deployed: " https://anikayoka.github.io/weather-or-not/",
      github: "https://github.com/anikayoka/weather-or-not",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
  ]);

  
  return (
    <div className="projects-container">
      <div className="d-flex flex-wrap ">
        {projectCards.map((element, i) => (
          <Card style={{ width: "18rem" }}>
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
                <Button className="projectBtn">github</Button>
              </a>
            </Card.Body>
          </Card>
          // <img
          //   src={require(`../../assets/small/${category}/${i}.jpg`)}
          //   alt={image.name}
          //   className="img-thumbnail mx-1"
          //   onClick={() => toggleModal(image, i)}
          //   key={image.name}
          // />
        ))}
      </div>
    </div>
  );
};

export default Projects;
