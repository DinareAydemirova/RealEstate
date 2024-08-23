import React from "react";
import Headings from "./Headings/Index";
import Properties from "./Properties/Index";
import Helmet from "react-helmet";

const Residencies = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Residencies</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Headings />
      <Properties />
    </div>
  );
};

export default Residencies;
