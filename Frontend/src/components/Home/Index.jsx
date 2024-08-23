import React from "react";
import Hero from "./Hero/Index";
import Partners from "./Partners/Index";
import Residencies from "./Residencies/Index";
import OurValue from "./OurValue/Index";
import Contact from "./Contact/Index";
import GetStarted from "./GetStarted/Index";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
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
