import React from "react";
import sp2 from "../semester-project2.jpg";
import exam1 from "../exam1.JPG";
import hackathon from "../hackathonJPG.JPG";

function Featured() {
  return (
    <div className="highlights">
      <h3>Project highlights</h3>
      <div className="highlights__cont">
        <div className="highlights__cont--item highlights-content">
          <a href="https://angry-bassi-1ce917.netlify.app/" target={"_blank"}>
            <div class="highlights-content-overlay"></div>
            <img src={sp2} alt="screenshot from project" />
            <div class="highlights-details fadeIn-bottom">
              <h3 class="highlights-title">Semester project</h3>
              <p class="highlights-text">December 2021</p>
            </div>
          </a>
        </div>
        <div className="highlights__cont--item highlights-content">
          <a
            href="https://pedantic-curran-7bf149.netlify.app/"
            target={"_blank"}
          >
            <div class="highlights-content-overlay"></div>
            <img src={exam1} alt="screenshot from project" />
            <div class="highlights-details fadeIn-bottom">
              <h3 class="highlights-title">Exam</h3>
              <p class="highlights-text">June 2021</p>
            </div>
          </a>
        </div>
        <div className="highlights__cont--item highlights-content">
          <a
            href="https://friendly-shockley-b1d933.netlify.app/"
            target={"_blank"}
          >
            <div class="highlights-content-overlay"></div>
            <img src={hackathon} alt="screenshot from project" />
            <div class="highlights-details fadeIn-bottom">
              <h3 class="highlights-title">Hackathon</h3>
              <p class="highlights-text">spring semester 2021</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Featured;
