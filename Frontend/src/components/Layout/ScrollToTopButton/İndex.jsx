import React, { useEffect, useState } from "react";
import style from "./ScrollToTopButton.module.scss";
import { BiSolidUpArrow } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MdMessage } from "react-icons/md";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <div className={`${style.scrollToTop} ${isVisible ? style.visible : ""}`}>
        {isVisible && (
          <button onClick={scrollToTop} className={style.top}>
            <BiSolidUpArrow style={{fontSize:"20px"}}/>
            <p>TOP</p>
          </button>
        )}
      </div>
      <Link to="/" className={style.message}>
        <MdMessage />
      </Link>
    </>
  );
};

export default ScrollToTopButton;
