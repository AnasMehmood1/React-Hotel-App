import React from 'react'
import Navbar from '../component/Navbar';
import Hero from '../component/hero';
import Footer from '../component/Footer';
import Reserve from '../component/Reserve';
import People from '../component/People';
import ContactSec from"../component/ContactSec"
const Reservation = () => {
  return (
    <div>
<Navbar/>
<Hero
        cName="hero"
        heroImg = "/image/hero_4.jpg"
        title = "Reservation Form"
        home = "Home"
        dot = "_"
        active = "Reservation"
       />
       <ContactSec/>
       <People/>
       <Reserve/>
       <Footer/>
    </div>
  )
}

export default Reservation
