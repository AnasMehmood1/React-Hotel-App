import React from 'react'
import Hero from '../component/hero';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Reserve from "../component/Reserve"
import ContactSec from '../component/ContactSec';
const Contact = () => {
  return (
    <div>
     <Navbar/>
     <Hero
        cName="hero"
        heroImg = "/image/hero_4.jpg"
        title = "Contact Us"
        home = "Home"
        dot = "_"
        active = "Contact"
       />
       <ContactSec/>
       <Reserve/>
       <Footer/>
    </div>
  )
}

export default Contact
