import React, { useState } from "react";
import style from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import { RiMenu3Fill , RiCloseLine} from "react-icons/ri";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => (location.pathname === path ? style.active : "");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className={style.wrapper}>
      <div className={style.container}>
        <div className={style.header}>
          <img src="./logo.png" alt="Logo" />
          <div className={`${style.menu} ${menuOpen ? style.open : ""}`}>
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
            <div className={style.burger} onClick={toggleMenu}>
            {menuOpen ? <RiCloseLine /> : <RiMenu3Fill />}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
