import React from 'react'
import Navbar from '../component/Navbar'
import Welcome from '../component/Welcome'
import Suits from '../component/Suits'
import Photos from '../component/Photos'
import Hero from '../component/hero'
import Resturant from '../component/Resturant'
import People from '../component/People'
import Eventsec from '../component/Eventssec'
import Reserve from '../component/Reserve'
import Footer from '../component/Footer'
const Home = () => {
  return (
   
       <>
       <Navbar/>
       <Hero 
        cName = "hero"
        text = "WELCOME TO  5 STAR HOTEL"
        title = "A Best Place To Stay"
        heroImg = "/image/hero_4.jpg"
       />
       <Welcome 
       Class = "section"

       />
       <Suits
    
        title = "Rooms & Suites"
        des = "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
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
 <Photos/>
 <Resturant/>
 <People/>
 <Eventsec

/>
 <Reserve/>
 <Footer/>
     </>
  )
}

export default Home
