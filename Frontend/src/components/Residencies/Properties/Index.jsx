import React, { useState } from "react";
import style from "./Properties.module.scss";
import { HiLocationMarker } from "react-icons/hi";

const Properties = () => {
    const [visible, setVisible] = useState(3);

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 3);
      };

  return (
    <section className={style.wrapper}>
      <div className={style.container}>
      <div className={style.searchBar} data-aos="fade-up">
              <span>
                <HiLocationMarker />
              </span>
              <input type="text" placeholder="Search by title/city/country ..." />
              <button>Search</button>
            </div>
        <div className={style.properties}>
          <div className={style.card} data-aos="fade-up">
            <img src="./r1.png" alt="" />
            <div className={style.price}>
              <p style={{ color: "orange", fontSize: "20px" }}>$</p>
              <p style={{ fontSize: "20px" }}>47,044</p>
            </div>
            <h2>Aliva Priva Jardin</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
              hic.
            </p>
          </div>
          <div className={style.card} data-aos="fade-up">
            <img src="./r1.png" alt="" />
            <div className={style.price}>
              <p style={{ color: "orange", fontSize: "20px" }}>$</p>
              <p style={{ fontSize: "20px" }}>47,044</p>
            </div>
            <h2>Aliva Priva Jardin</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
              hic.
            </p>
          </div>
          <div className={style.card} data-aos="fade-up">
            <img src="./r1.png" alt="" />
            <div className={style.price}>
              <p style={{ color: "orange", fontSize: "20px" }}>$</p>
              <p style={{ fontSize: "20px" }}>47,044</p>
            </div>
            <h2>Aliva Priva Jardin</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
              hic.
            </p>
          </div>
          <div className={style.card} data-aos="fade-up">
            <img src="./r1.png" alt="" />
            <div className={style.price}>
              <p style={{ color: "orange", fontSize: "20px" }}>$</p>
              <p style={{ fontSize: "20px" }}>47,044</p>
            </div>
            <h2>Aliva Priva Jardin</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
              hic.
            </p>
          </div>
          <div className={style.card} data-aos="fade-up">
            <img src="./r1.png" alt="" />
            <div className={style.price}>
              <p style={{ color: "orange", fontSize: "20px" }}>$</p>
              <p style={{ fontSize: "20px" }}>47,044</p>
            </div>
            <h2>Aliva Priva Jardin</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
              hic.
            </p>
          </div>
          <div className={style.card} data-aos="fade-up">
            <img src="./r1.png" alt="" />
            <div className={style.price}>
              <p style={{ color: "orange", fontSize: "20px" }}>$</p>
              <p style={{ fontSize: "20px" }}>47,044</p>
            </div>
            <h2>Aliva Priva Jardin</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
              hic.
            </p>
          </div>
        </div>
        <button className={style.loadmore} onClick={showMoreItems}>Load More</button>
      </div>
    </section>
  );
};

export default Properties;
