import React from "react";
import Hero from "./Hero/Index";
import Partners from "./Partners/Index";
import Residencies from "./Residencies/Index";
import OurValue from "./OurValue/Index";
import Contact from "./Contact/Index";
import GetStarted from "./GetStarted/Index";

const Home = () => {
  return (
    <div>
      <Hero />
      <Partners />
      <Residencies />
      <OurValue />
      <Contact/>
      <GetStarted/>
    </div>
  );
};

export default Home;
