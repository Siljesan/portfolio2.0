import React from "react";
import Contactform from "./Contactform";
import Featured from "./Featured";
import Header from "./Header";
import Hero from "./Hero";

function Home() {
  return (
    <div className="backgroundImg">
      <Header />
      <div className="lp__content">
        <Hero />
        <Featured />
      </div>
      <Contactform />
    </div>
  );
}

export default Home;
