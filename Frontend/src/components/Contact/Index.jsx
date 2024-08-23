import React from "react";
import Headings from "./Headings/Index";
import ContactForm from "./ContactForm/Index";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Headings />
      <ContactForm />
    </div>
  );
};

export default Contact;
