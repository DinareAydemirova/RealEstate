import React, { useEffect, useState } from "react";
import style from "./Properties.module.scss";
import { HiLocationMarker } from "react-icons/hi";
import axios from "axios";


const Properties = () => {
  const [visible, setVisible] = useState(3);
  const [data, setData] = useState([]);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };


  useEffect(() => {
    axios.get("/properties").then((response)=>{
      setData(response.data);
      console.log(data);
    })
  }, [])
  

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
          {data?.map((elem)=>{
            return(
              <div className={style.card} data-aos="fade-up">
              <img src={elem.images[0]} alt="" />
              <div className={style.price}>
                <p style={{ color: "orange", fontSize: "20px" }}>$</p>
                <p style={{ fontSize: "20px" }}>{elem.price}</p>
              </div>
              <h2>{elem.location}</h2>
              <p>
                {elem.description}
              </p>
            </div>
            )
          })}
         
        </div>
        <button className={style.loadmore} onClick={showMoreItems}>
          Load More
        </button>
      </div>
    </section>
  );
};

export default Properties;
