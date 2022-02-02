import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Projects from "./Projects";

function About() {
  return (
    <div>
      <Header />
      <div className="about">
        <div className="about__cont">
          <h1>About me</h1>
          <p>
            I am graduating in June 2022 with a diploma in front-end Development
            after two years of studying at Noroff - School of Technology and
            digital media. And I am currently looking for work.
          </p>
          <p>
            My abilities include; HTML, CSS, SASS, JavaScript, Typescript and
            React.
          </p>
          <p>Scroll Down to see all my Projects!</p>
        </div>
      </div>
      <div className="about__projects">
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default About;
