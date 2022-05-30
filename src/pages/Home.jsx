import React from "react";
import Contactform from "../components/Contactform";
import Featured from "../components/Featured";
import Hero from "../components/Hero";

function Home() {
  return (
    <div className="content">
      <div className="lp__content">
        <Hero />
        <Featured />
      </div>
      <div className="contactform__home">
      <Contactform />
      </div>
    </div>
  );
}

export default Home;
