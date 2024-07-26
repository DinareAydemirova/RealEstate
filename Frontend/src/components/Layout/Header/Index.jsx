import React, { useContext, useState } from "react";
import style from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import { CgLogIn } from "react-icons/cg";
import { UserContext } from "../../../context/userProvider";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { decode, logout } = useContext(UserContext);

  const isActive = (path) => (location.pathname === path ? style.active : "");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const getInitials = (fullName) => {
    if (!fullName) return "";
    const names = fullName.split(" ");
    const initials = names.map((name) => name.charAt(0).toUpperCase());
    return initials.join("");
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
            <li className={isActive("/contact")}>
              <Link to="/contact">Contact</Link>
            </li>
            <div className={style.loginRegister}>
              {decode ? (
                <>
                  <li style={{display:"flex", alignItems:"center"}}>
                  <CiLogout className="text-red-500"/>
                    <button className={style.logout} onClick={logout}>
                      Logout
                    </button>
                  </li>
                  <li>
                    <p className={style.userName}>{getInitials(decode.fullName)}</p>
                  </li>
                </>
              ) : (
                <>
                  <li className={isActive("/register")}>
                    <Link to="/register">Sign Up</Link>
                  </li>
                  <li className={style.button}>
                    <Link to="/login">
                      <p
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        Log In <CgLogIn />
                      </p>
                    </Link>
                  </li>
                </>
              )}
            </div>

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
