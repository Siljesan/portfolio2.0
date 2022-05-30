import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import sp2 from "../media/semester-project2.jpg";
import exam1 from "../media/exam1.JPG";
import exam2 from "../media/exam2.JPG";
import project1 from "../media/project1.jpg";

function Projects() {
  return (
    <div className="projects">
      <div className="projects__container">
        <h1>Projects</h1>
        <div>
          <Container className="projects__cont">
            <Row>
              <Col className="projects__cont--item" sm={7}>
                <div className="projects-content">
                  <a
                    href="https://angry-bassi-1ce917.netlify.app/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <div class="projects-content-overlay"></div>
                    <img src={sp2} alt="screenshot from project" />
                    <div class="projects-details fadeIn-bottom">
                      <h3 class="projects-title">Semester project</h3>
                      <p class="projects-text">December 2021</p>
                    </div>
                  </a>
                </div>
              </Col>
              <Col className="projects__cont--item" sm={4}>
                <div className="projects-content">
                  <a
                    href="https://pedantic-curran-7bf149.netlify.app/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <div class="projects-content-overlay"></div>
                    <img src={exam1} alt="screenshot from project" />
                    <div class="projects-details fadeIn-bottom">
                      <h3 class="projects-title">Project Exam 1</h3>
                      <p class="projects-text">June 2021</p>
                    </div>
                  </a>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="projects__cont--item" sm={4}>
                <div className="projects-content">
                  <a
                    href="https://cheery-frangollo-43737e.netlify.app/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <div class="projects-content-overlay"></div>
                    <img src={exam2} alt="screenshot from project" />
                    <div class="projects-details fadeIn-bottom">
                      <h3 class="projects-title">Project Exam 2</h3>
                      <p class="projects-text">June 2022</p>
                    </div>
                  </a>
                </div>
              </Col>
              <Col className="projects__cont--item" sm={7}>
                <div className="projects-content">
                  <a
                    href="https://mystifying-knuth-c64610.netlify.app/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <div class="projects-content-overlay"></div>
                    <img src={project1} alt="screenshot from project" />
                    <div class="projects-details fadeIn-bottom">
                      <h3 class="projects-title">School project</h3>
                      <p class="projects-text">Autumn semester 2021</p>
                    </div>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Projects;
