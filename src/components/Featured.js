import React from "react";
import sp2 from "../semester-project2.jpg";
import exam1 from "../exam1.JPG";
import hackathon from "../hackathonJPG.JPG";

function Featured() {
  return (
    <div className="highlights">
      <h3>Project highlights</h3>
      <div className="highlights__cont">
        <div className="highlights__cont--item">
          <img src={sp2} alt="" />
        </div>
        <div className="highlights__cont--item">
          <img src={exam1} alt="" />
        </div>
        <div className="highlights__cont--item">
          <img src={hackathon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
