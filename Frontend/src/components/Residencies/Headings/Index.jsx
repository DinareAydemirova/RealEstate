import React from 'react'
import style from './Headings.module.scss'
import { HiLocationMarker } from "react-icons/hi";


const Headings = () => {
  
  return (
    <div className={style.container} data-aos="fade-down">
       <div className={style.headings}>
         <h1>All Properties</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, iusto! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae eligendi quo praesentium repudiandae accusantium quia, nihil quasi aperiam, illo omnis similique consequatur eaque </p>
         <div className={style.searchBar}>
              <span>
                <HiLocationMarker />
              </span>
              <input type="text" placeholder="Search by title/city/country ..." />
              <button>Search</button>
            </div>
       </div>
      
    </div>
  )
}

export default Headings