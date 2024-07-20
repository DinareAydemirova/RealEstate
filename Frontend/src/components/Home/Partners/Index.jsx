import React from "react";
import style from "./Partners.module.scss";

const Partners = () => {
  const partners = [
    "./equinix.png",
    "./realty.png",
    "./equinix.png",
    "./tower.png"
  ];

  const allPartners = [...partners, ...partners];

  return (
    <section className={style.wrapper}>
      <div className={style.container}>
        <h1>Our Partners</h1>
        <div className={style.slider}>
          <div className={style.images}>
            {allPartners.map((src, index) => (
              <div className={style.slide} key={index}>
                <img src={src} alt={`Partner ${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
