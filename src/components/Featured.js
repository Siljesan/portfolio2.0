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
          <div class="highlights-content-overlay"></div>
          <img src={sp2} alt="screenshot from project" />
          <div class="highlights-details fadeIn-bottom">
            <h3 class="highlights-title">Semester project</h3>
            <p class="highlights-text">December 2021</p>
          </div>
        </div>
        <div className="highlights__cont--item highlights-content">
          <div class="highlights-content-overlay"></div>
          <img src={exam1} alt="screenshot from project" />
          <div class="highlights-details fadeIn-bottom">
            <h3 class="highlights-title">Exam</h3>
            <p class="highlights-text">June 2021</p>
          </div>
        </div>
        <div className="highlights__cont--item highlights-content">
          <div class="highlights-content-overlay"></div>
          <img src={hackathon} alt="screenshot from project" />
          <div class="highlights-details fadeIn-bottom">
            <h3 class="highlights-title">Hackathon</h3>
            <p class="highlights-text">spring semester 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
