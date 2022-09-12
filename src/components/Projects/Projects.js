import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/gearbest.png";
import chatify from "../../Assets/Projects/asos.png";
import suicide from "../../Assets/Projects/caratlane.png";
import bitsOfCode from "../../Assets/Projects/weather.png";
import nykaa from "../../Assets/Projects/nykaa-clone.png";
import myhours from "../../Assets/Projects/myhours.png";

function Projects() {
  return (
    <Container  fluid className="project-section">
      <div id="project" className="projects-sections"></div>
      <Particle />
      <Container>
        <h1 className="project-heading" >
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nykaa}
              isBlog={false}
              title="Nykaa.com Clone"
              description="Full stack web application clone of an E-commerce website Nykaa, an online store to beauty and makeup products."
              stacks="Tech Stack : React, Redux, Javascript, Chakra-UI, Node, Express, MongoDB"
              ghLink="https://github.com/AFFAN-AHMAD/Nykaa"
              demoLink="https://funny-week-7983-affan-ahmad.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myhours}
              isBlog={false}
              title="Myhours.com Clone"
              description="Full stack web application clone built for anyone who want to keep a track of his project work time, clients, and teams."
              stacks="Tech Stack :  React, Javascript, Chakra-UI, Node, Express, MongoDB"
              ghLink="https://github.com/aakarsh604/Myhours-clone"
              demoLink="https://wonderful-dasik-3cd912.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Asos.com Clone"
              description="Asos is an E-commerce website. Have built the user flow of the website from sign up to placing the orders with cart updation feature"
              stacks="Tech Stack : React, Redux, Javascript, Chakra-UI"
              ghLink="https://github.com/aakarsh604/Asos-Clone"
              demoLink="https://papaya-tarsier-65f2d1.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Weather App"
              description="A weather forecasting web application built using weather API. It shows city and current location based weather data with next 5 hours and 5 days forecast."
              stacks="Tech Stack : React, Javascript, Tailwind-CSS, Rest-API"
              ghLink="https://github.com/aakarsh604/React_WeatherApp"
              demoLink="https://incandescent-toffee-012bd4.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Gearbest.com Clone"
              description="A cloned web application of gearbest.com is an E-commerce platform selling an extensive range of goods from clothing, accessories, appliances, home-decor, and electronic gadgets."
              stacks="Tech Stack : HTML5, CSS3, Javascript"
              ghLink="https://github.com/aakarsh604/Gearbest-Clone"
              demoLink="https://silly-queijadas-e172c2.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Caratlane.com Clone"
              description="Web application clone of an E-commerce website caratlane.com selling diamonds and jewellery for both men and women."
              stacks="Tech Stack : HTML5, CSS3, Javascript"
              ghLink="https://github.com/Shubham-46/CARAT-LANE-CLONE"
              demoLink="https://sensational-kheer-5c4a81.netlify.app/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
