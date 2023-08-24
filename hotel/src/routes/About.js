import React from 'react'
import Hero from '../component/hero';
import Navbar from '../component/Navbar';
import Welcome from '../component/Welcome';
import Photos from '../component/Photos';
import Footer from '../component/Footer';
const About = () => {
  return (
    <div>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg = "/image/hero_4.jpg"
        title = "About Us"
        home = "Home"
        dot = "_"
        active = "About"
       />
        <Welcome/>
        <Photos/>
   <Footer/>
    </div>
  )
}

export default About
