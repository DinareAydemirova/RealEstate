import React from "react";
import style from "./Hero.module.scss";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className={style.wrapper}>
      <div className={style.container}>
        <div className={style.hero}>
          <div className={style.heroLeft}>
            <div className={style.title}>
              <div className={style.orangecycle} />
              <h1>
                Discover <br /> Most Suitable <br />
                Property
              </h1>
            </div>
            <div className={style.descrip}>
              <span>
                Find a variety of properties that suit you very easilty
              </span>
              <br />
              <span>
                Forget all difficulties in finding a residence for you
              </span>
            </div>
            <div className={style.searchBar}>
              <span>
                <HiLocationMarker />
              </span>
              <input type="text" placeholder="Search for location ..." />
              <button>Search</button>
            </div>
            <div className={style.stats}>
              <div className={style.stat}>
                <span>
                  <CountUp start={8800} end={9000} duration={4} />
                  <span style={{ color: "orange" }}>+</span>
                </span>
                <p>Premium products</p>
              </div>
              <div className={style.stat}>
                <span>
                  <CountUp start={1800} end={2000} duration={4} />
                  <span style={{ color: "orange" }}>+</span>
                </span>
                <p>Happy Customer </p>
              </div>
              <div className={style.stat}>
                <span>
                  <CountUp start={20} end={28} duration={4} />
                  <span style={{ color: "orange" }}>+</span>
                </span>
                <p>Awards Winning</p>
              </div>
            </div>
          </div>

          <div className={style.heroRight}>
            <div className={style.image}>
              <img src="./hero-image.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
