import React, { useEffect, useRef, useState } from "react";
import style from "./Residencies.module.scss";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Navigation, A11y } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import axios from "axios";

const Residencies = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/properties")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log("Error fetching properties:", error);
      });
  }, []);

  return (
    <section className={style.wrapper} data-aos="fade-up">
      <div className={style.container}>
        <div className={style.headings}>
          <div>
            <h3>Best Choices</h3>
            <h1>Residencies</h1>
          </div>
          <div className={style.arrows}>
            <button ref={prevRef}>
              <IoIosArrowBack />
            </button>
            <button ref={nextRef}>
              <IoIosArrowForward />
            </button>
          </div>
          
        </div>
        <Link to="/residencies" className={style.seemore}>See more</Link>

        <Swiper
          className={style.reasidencies}
          modules={[Navigation, A11y]}
          spaceBetween={35}
          slidesPerView={4}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            700: {
              slidesPerView: 2,
            },
            800: {
              slidesPerView: 4,
            },
          }}
        >
          {data.slice(0,8).map((elem, index) => (
            <SwiperSlide className={style.card} key={index}>
              <img src={elem.images[0]} alt="" />
              <div className={style.price}>
                <p style={{ color: "orange", fontSize: "20px" }}>$</p>
                <p style={{ fontSize: "20px" }}>{elem.price}</p>
              </div>
              <h2>{elem.city}</h2>
              <p>
                {elem.description.slice(0,100)}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      

      </div>
    </section>
  );
};

export default Residencies;
