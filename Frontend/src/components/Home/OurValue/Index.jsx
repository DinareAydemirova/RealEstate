import React, { useState } from "react";
import style from "./OurValue.module.scss";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoShieldCheckmark, IoCloseCircle } from "react-icons/io5";
import { GiHistogram } from "react-icons/gi";

const OurValue = () => {
  const [expandedIndex, setExpandedIndex] = useState(0); 

  const handleAccordionClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className={style.wrapper}>
      <div className={style.container}>
        <div className={style.value}>
          <div className={style.leftside} data-aos="fade-down">
            <img src="./value.png" alt="Value Representation" />
          </div>
          <div className={style.rightside} data-aos="fade-up">
            <div className={style.headings}>
              <h3>Our Value</h3>
              <h2>Value We Give to You</h2>
              <p>
                We are always ready to help by providing the best services for
                you. We believe a good place to live can make your life better.
              </p>
            </div>
            <div className={style.accordions}>
              {[{
                icon: <IoShieldCheckmark />,
                text: "Best interest rates on the market",
                content: "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim."
              }, {
                icon: <IoCloseCircle />,
                text: "Prevent unstable prices",
                content: "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim."
              }, {
                icon: <GiHistogram />,
                text: "Best price on the market",
                content: "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim."
              }].map((item, index) => (
                <div
                  key={index}
                  className={`${style.accordion} ${expandedIndex === index ? style.active : ''}`}
                >
                  <div
                    className={`${style.heading}`}
                    onClick={() => handleAccordionClick(index)}
                  >
                    <span>{item.icon}</span>
                    <p>{item.text}</p>
                    <span>
                      <MdOutlineArrowDropDown />
                    </span>
                  </div>
                  <div
                    className={`${style.info} ${expandedIndex === index ? style.expanded : ''}`}
                  >
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValue;
