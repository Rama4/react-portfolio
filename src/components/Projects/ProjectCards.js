import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {props.imgPath?.length > 0 && <Card.Img variant="top" src={props.imgPath} alt="image" /> }
      <Card.Body>
        <Card.Title><strong className="purple">{props.title}</strong></Card.Title>
        {props.imgPath?.length > 0 && <Card.Text style={{ textAlign: "justify" }}>{props.description}</Card.Text>}
        {props.stacks?.length > 0 && <Card.Text style={{ textAlign: "center" }}>{props.stacks}</Card.Text>}
        {props.ghLink?.length > 0 && 
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        }
        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
