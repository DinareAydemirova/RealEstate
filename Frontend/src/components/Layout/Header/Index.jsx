import React, { useEffect, useState } from "react";
import style from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";

const Header = () => {
  const location = useLocation();

  const isActive = (path) => (location.pathname === path ? style.active : "");

  return (
    <section className={style.wrapper}>
      <div className={style.container}>
        <div className={style.header}>
          <img src="./logo.png" alt="Logo" />
          <div className={style.menu}>
            <li className={isActive("/residencies")}>
              <Link to="/residencies">Residencies</Link>
            </li>
            <li className={isActive("/our-value")}>
              <Link to="/our-value">Our Value</Link>
            </li>
            <li className={isActive("/contact-us")}>
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li className={isActive("/get-started")}>
              <Link to="/get-started">Get Started</Link>
            </li>
            <li>
              <Link to="/contact" className={style.button}>
                Contact
              </Link>
            </li>
            <li className={style.burger}>
              <RiMenu3Fill />
            </li>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
