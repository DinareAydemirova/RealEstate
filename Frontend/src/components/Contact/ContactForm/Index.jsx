import React from 'react';
import style from './ContactForm.module.scss';
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";

const ContactForm = () => {
  const openWhatsApp = (number) => {
    const url = `https://wa.me/${number}`;
    window.open(url, "_blank");
  };

  const sendMail = (email) => {
    const subject = encodeURIComponent("Subject of the Email");
    const body = encodeURIComponent("Body of the Email");
    const url = `mailto:${email}?subject=${subject}&body=${body}`;
    window.open(url, "_blank");
  };

  const openMap = () => {
    const url = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2920.7008610522607!2d49.84904458487168!3d40.37719389782147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d077c61fef3%3A0xfa4594c97092ca01!2sAF%20Business%20House!5e1!3m2!1sen!2sbd!4v1707418765094!5m2!1sen!2sbd`;
    window.open(url, "_blank");
  };

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.contact}>
          <div className={style.leftside} data-aos="fade-right">
            <div className={style.contactways}>
              <div className={style.cards}>
                <div className={style.card}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "30px",
                    }}
                  >
                    <span>
                      <FaLocationDot />
                    </span>
                    <div>
                      <h4>Location</h4>
                      <p>AF Business House</p>
                    </div>
                  </div>
                  <button onClick={openMap}>See location</button>
                </div>
                <div className={style.card}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "30px",
                    }}
                  >
                    <span>
                      <BiSolidMessageRoundedDots />
                    </span>
                    <div>
                      <h4>Chat</h4>
                      <p>021 123 145 14</p>
                    </div>
                  </div>
                  <button onClick={() => openWhatsApp("994508006366")}>
                    Chat now
                  </button>
                </div>
              </div>
              <div className={style.cards}>
                <div className={style.card}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "30px",
                    }}
                  >
                    <span>
                      <BiSolidMessageAltDetail />
                    </span>
                    <div>
                      <h4>Message Now</h4>
                      <p>021 123 145 14</p>
                    </div>
                  </div>
                  <button>Message now</button>
                </div>
                <div className={style.card}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "30px",
                    }}
                  >
                    <span>
                      <IoMdMail />
                    </span>
                    <div>
                      <h4>Send Mail</h4>
                      <p>homyz@gmail.com</p>
                    </div>
                  </div>
                  <button onClick={() => sendMail("homyz@gmail.com")}>
                    Send mail now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={style.rightside} data-aos="fade-left">
            <form action="">
              <div>
                <input type="text" placeholder="Full Name" />
                <input type="email" name="" id="" placeholder="Email" />
              </div>
              <textarea name="" id="" placeholder="Message" />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
