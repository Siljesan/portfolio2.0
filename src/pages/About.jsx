import React from "react";
import Projects from "../components/Projects";

function About() {
  return (
    <div className="content">
      <div className="about">
        <div className="about__cont">
          <h1>About me</h1>
          <p>
            I am graduating in June 2022 with a diploma in front-end development
            after two years of studying at Noroff - School of Technology and
            digital media. And I am currently looking for work.
          </p>
          <p>
            My abilities include; HTML, CSS, SASS, JavaScript, Typescript, React and Next.
          </p>
          <p>Scroll Down to see all my Projects!</p>
        </div>
      </div>
      <div className="about__projects">
        <Projects />
      </div>
    </div>
  );
}

export default About;
