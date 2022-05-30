import React from "react";
import profile from "../media/profile.jpg";

function Hero() {
  return (
    <div className="introduction">
      <div className="introduction__text">
        <h1>Hello World!</h1>
        <h2>I am Silje the Front-End Developer</h2>
      </div>
      <div className="introduction__img">
        <img src={profile} alt="profile of me" />
      </div>
    </div>
  );
}

export default Hero;
