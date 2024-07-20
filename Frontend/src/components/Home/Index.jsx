import React from "react";
import Hero from "./Hero/Index";
import Partners from "./Partners/Index";
import Residencies from "./Residencies/Index";
import OurValue from "./OurValue/Index";
import Contact from "./Contact/Index";

const Home = () => {
  return (
    <div>
      <Hero />
      <Partners />
      <Residencies />
      <OurValue />
      <Contact/>
    </div>
  );
};

export default Home;
