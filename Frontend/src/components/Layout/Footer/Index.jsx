import React from "react";
import style from "./Footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className={style.wrapper}>
      <div className={style.container}>
        <div className={style.footer}>
          <div className={style.desc}>
            <img src="./logo2.png" alt="" />
            <p>
              Our vision is to make all people the best place to live for them.
            </p>
          </div>
          <div className={style.pages}>
            <h4>Pages</h4>
            <Link to='/'>Home</Link>
            <Link to='/residencies'>Residencies</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/login'>Log In</Link>
            <Link to='/register'>Sign Up</Link>
          </div>
          <div className={style.location}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2920.7008610522607!2d49.84904458487168!3d40.37719389782147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d077c61fef3%3A0xfa4594c97092ca01!2sAF%20Business%20House!5e1!3m2!1sen!2sbd!4v1707418765094!5m2!1sen!2sbd"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
