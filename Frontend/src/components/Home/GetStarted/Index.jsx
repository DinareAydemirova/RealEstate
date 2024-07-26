import React from 'react'
import style from './GetStarted.module.scss'
import { Link } from 'react-router-dom'

const GetStarted = () => {
  return (
    <section className={style.wrapper} data-aos="fade-down">
       <div className={style.container}>
         <div className={style.getstarted}>
            <h1>Get started with Homyz</h1>
            <p>Subscribe and find super attractive price quotes from us.
            Find your residence soon</p>
            <Link to='/login'>Get Started</Link>
         </div>
       </div>
    </section>
  )
}

export default GetStarted