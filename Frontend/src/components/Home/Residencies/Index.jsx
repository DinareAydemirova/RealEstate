import React, { useRef } from "react";
import style from "./Residencies.module.scss";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";

const Residencies = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className={style.wrapper} data-aos="fade-up">
      <div className={style.container}>
        <div className={style.headings}>
          <div>
            <h3>Best Choices</h3>
            <h1>Popular Residencies</h1>
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
          <SwiperSlide className={style.card}>
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
          </SwiperSlide>
          <SwiperSlide className={style.card}>
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
          </SwiperSlide>
          <SwiperSlide className={style.card}>
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
          </SwiperSlide>
          <SwiperSlide className={style.card}>
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
          </SwiperSlide>
          <SwiperSlide className={style.card}>
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
          </SwiperSlide>
          <SwiperSlide className={style.card}>
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
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;
