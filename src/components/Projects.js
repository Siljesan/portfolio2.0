import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Projects() {
  return (
    <div className="projects">
      <div className="projects__container">
        <h1>Projects</h1>
        <div>
          <Container className="projects__cont">
            <Row>
              <Col className="projects__cont--item" sm={7}>
                7
              </Col>
              <Col className="projects__cont--item" sm={4}>
                4
              </Col>
            </Row>
            <Row>
              <Col className="projects__cont--item" sm={4}>
                4
              </Col>
              <Col className="projects__cont--item" sm={7}>
                7
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Projects;
