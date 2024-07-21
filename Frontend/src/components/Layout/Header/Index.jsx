import React, { useState } from "react";
import style from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { CgLogIn } from "react-icons/cg";

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
          <Link to={"/"}>
            <img src="./logo.png" alt="Logo" />
          </Link>
          <div className={`${style.menu} ${menuOpen ? style.open : ""}`}>
            <li className={isActive("/residencies")}>
              <Link to="/residencies">Residencies</Link>
            </li>
            <li className={isActive("/our-value")}>
              <Link to="/our-value">Contact</Link>
            </li>
            <li className={isActive("/contact-us")}>
              <Link to="/contact-us">Sign Up</Link>
            </li>
            <li className={style.button} >
              <Link to="/contact" >
              <p style={{display:"flex", alignItems:"center", gap:"5px"}}> Log In <CgLogIn /></p>
                
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
