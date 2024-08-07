import React from "react";
import style from "./Contact.module.scss";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  const openWhatsApp = (number) => {
    const url = `https://wa.me/${994508006366}`;
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
    <section className={style.wrapper} data-aos="fade-up">
      <div className={style.container}>
        <div className={style.contact}>
          <div className={style.leftside}>
            <div className={style.headings}>
              <h3>Contact Us</h3>
              <h2>Easy to contact us</h2>
              <p>
                We always ready to help by providijng the best services for you.
                We beleive a good blace to live can make your life better
              </p>
            </div>
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
          <div className={style.rightside}>
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
