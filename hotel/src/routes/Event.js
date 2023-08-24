import React from 'react'
import Navbar from '../component/Navbar';
import Hero from '../component/hero';
import Footer from '../component/Footer';
import Reserve from "../component/Reserve"
import Eventsec from '../component/Eventssec';
const Event = () => {
  return (
    <div>
    <Navbar/>
    <Hero
        cName="hero"
        heroImg = "/image/hero_4.jpg"
        title = "Event"
        home = "Home"
        dot = "_"
        active = "Event"
       />
       <Eventsec/>
      
       <Reserve/>
       <Footer/>
    </div>
  )
}

export default Event
