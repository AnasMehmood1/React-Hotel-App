import React from 'react'
import Navbar from '../component/Navbar';
import Hero from '../component/hero';
import Footer from '../component/Footer';
import Welcome from '../component/Welcome';
import Suits from '../component/Suits';
import Roomsection from '../component/Roomsection';
import Reserve from '../component/Reserve';

const Rooms = (sec) => {
  return (
    <div>
     <Navbar/>
     <Hero
        cName="hero"
        heroImg = "/image/hero_4.jpg"
        title = "Rooms"
        home = "Home"
        dot = "_"
        active = "Rooms"
       />
         <Welcome 
       Class = "section"/>
   <Suits
    image1 = "/image/img_1.jpg"
    image2 = "/image/img_2.jpg"
    image3 = "/image/img_3.jpg"
    imagetitle1 = "Single Room"
    imagetitle2 = "Family Room"
    imagetitle3 = "Presidental Room"
    price1 = "90$ / PER NIGHT"
    price2 = "120$ / PER NIGHT"
    price3 = "250$ / PER NIGHT"
   />
   <Suits
    image1 = "/image/img_1.jpg"
    image2 = "/image/img_2.jpg"
    image3 = "/image/img_3.jpg"
    imagetitle1 = "Single Room"
    imagetitle2 = "Family Room"
    imagetitle3 = "Presidental Room"
    price1 = "90$ / PER NIGHT"
    price2 = "120$ / PER NIGHT"
    price3 = "250$ / PER NIGHT"
   />
   <Roomsection
   Roomsection = "Roomsection"
   Room_card_section_reverse = "Room_card_section_reverse"
   Room_card_section = "Room_card_section"
   col_1 = "col_1"
   col_2 = "col_2"
   text_area ="text_area"
   name = "Family room"
   name_1 = "Presidential Room"
   />
  <Reserve/>
       <Footer/>
    </div>
  )
}

export default Rooms
