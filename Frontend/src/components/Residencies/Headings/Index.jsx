import React from 'react'
import style from './Headings.module.scss'
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";



const Headings = () => {
  
  return (
    <div className={style.wrapper}>
      <div className={style.container} data-aos="fade-down">
        <div className={style.contact}>
          <h1>All Properties</h1>
          
          <div className={style.page}>
            <Link to="/">Home</Link>
            <IoIosArrowForward />
            <span>Residencies</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Headings