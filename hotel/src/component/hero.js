import React from 'react'
import "./herostyle.css"
import "./Navbarstyle.css"
import { Link } from 'react-router-dom'
const Hero = (props) => {
  return (
   <div className={props.cName}>
    <img src={props.heroImg} alt="heroImg" />
    <div className="hero-text">
        <p>{props.text}</p>
        <h1>{props.title}</h1>
        <div className="line">
            <Link  className ="b" to="/">{props.home}</Link>
            <p>{props.dot}</p>
           <h6 className='ac'>{props.active}</h6>
        </div>
    </div>
   </div>
  )
}

export default Hero
