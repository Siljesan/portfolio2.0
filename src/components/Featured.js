import React from "react";
import sp2 from "../media/semester-project2.jpg";
import exam1 from "../media/exam1.JPG";
import exam2 from "../media/exam2.JPG";

function Featured() {
  return (
    <div className="highlights">
      <h3>Project highlights</h3>
      <div className="highlights__cont">
        <div className="highlights__cont--item highlights-content">
          <a
            href="https://cheery-frangollo-43737e.netlify.app/"
            target={"_blank"}
            rel="noreferrer"
          >
            <div className="highlights-content-overlay"></div>
            <img src={exam2} alt="screenshot from project" />
            <div className="highlights-details fadeIn-bottom">
              <h3 className="highlights-title">Project Exam 2</h3>
              <p className="highlights-text">June 2022</p>
            </div>
          </a>
        </div>
        <div className="highlights__cont--item highlights-content">
          <a
            href="https://angry-bassi-1ce917.netlify.app/"
            target={"_blank"}
            rel="noreferrer"
          >
            <div className="highlights-content-overlay"></div>
            <img src={sp2} alt="screenshot from project" />
            <div className="highlights-details fadeIn-bottom">
              <h3 className="highlights-title">Semester project</h3>
              <p className="highlights-text">December 2021</p>
            </div>
          </a>
        </div>
        <div className="highlights__cont--item highlights-content">
          <a
            href="https://pedantic-curran-7bf149.netlify.app/"
            target={"_blank"}
            rel="noreferrer"
          >
            <div className="highlights-content-overlay"></div>
            <img src={exam1} alt="screenshot from project" />
            <div className="highlights-details fadeIn-bottom">
              <h3 className="highlights-title">Project Exam 1</h3>
              <p className="highlights-text">June 2021</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Featured;
