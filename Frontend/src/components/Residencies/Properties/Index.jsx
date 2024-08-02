import React, { useEffect, useState } from "react";
import style from "./Properties.module.scss";
import { HiLocationMarker } from "react-icons/hi";
import axios from "axios";

const Properties = () => {
  const [visible, setVisible] = useState(3);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const filteredData = data.filter((property) =>
    property.city.toLowerCase().includes(search.toLowerCase()) ||
    property.street.toLowerCase().includes(search.toLowerCase())
  );

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  useEffect(() => {
    axios.get("/properties")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching properties:", error);
      });
  }, []);

  return (
    <section className={style.wrapper}>
      <div className={style.container}>
        <div className={style.searchBar} data-aos="fade-up">
          <span>
            <HiLocationMarker />
          </span>
          <input
            type="text"
            placeholder="Search by city/street ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>Search</button>
        </div>
        <div className={style.properties}>
          {filteredData.slice(0, visible).map((elem, index) => (
            <div className={style.card} data-aos="fade-up" key={index}>
              <img src={elem.images[0]} alt={elem.city} />
              <div className={style.price}>
                <p style={{ color: "orange", fontSize: "20px" }}>$</p>
                <p style={{ fontSize: "20px" }}>{elem.price}</p>
              </div>
              <h2>{elem.city}</h2>
              <p>{elem.description.slice(0, 170)}...</p>
            </div>
          ))}
        </div>
        {visible < filteredData.length && (
          <button className={style.loadmore} onClick={showMoreItems}>
            Load More
          </button>
        )}
      </div>
    </section>
  );
};

export default Properties;
