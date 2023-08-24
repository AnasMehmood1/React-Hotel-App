
import "./Peoplestyle.css"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

const People = () => {
  return (
    <>
       {/* <div className="people-container">
       
        </div> */}
         <div className="People-text">
            <h1 className="people">People Says</h1>
            </div>

        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          
           <div className="people-card">
               <div className="img">
               <img src="/image/person_1.jpg" alt="" />
               </div>
               
               <div className="des">
               <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis qui ipsum beatae optio et commodi, minima doloribus magni, dolore nostrum nisi vero, labore aspernatur libero rem harum recusandae mollitia! Nisi culpa libero dicta suscipit tempora.</p>
               </div>
           <div className="name"><i class="fa regular fa-minus"></i> Maira Khan</div>
           
            </div>
        </SwiperSlide>
        <SwiperSlide>   <div className="people-card">
        <div className="img">
               <img src="/image/person_2.jpg" alt="" />
               </div>
               
               <div className="des">
               <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis qui ipsum beatae optio et commodi, minima doloribus magni, dolore nostrum nisi vero, labore aspernatur libero rem harum recusandae mollitia! Nisi culpa libero dicta suscipit tempora.</p>
               </div>
           <div className="name"><i class="fa regular fa-minus"></i> Haris</div>
           
            </div></SwiperSlide>
        <SwiperSlide>   <div className="people-card">
        <div className="img">
               <img src="/image/person_3.jpg" alt="" />
               </div>
               
               <div className="des">
               <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis qui ipsum beatae optio et commodi, minima doloribus magni, dolore nostrum nisi vero, labore aspernatur libero rem harum recusandae mollitia! Nisi culpa libero dicta suscipit tempora.</p>
               </div>
           <div className="name"><i class="fa regular fa-minus"></i> Molvi</div>
           
            </div></SwiperSlide>
        <SwiperSlide>   <div className="people-card">
        <div className="img">
               <img src="/image/person_1.jpg" alt="" />
               </div>
               
               <div className="des">
               <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis qui ipsum beatae optio et commodi, minima doloribus magni, dolore nostrum nisi vero, labore aspernatur libero rem harum recusandae mollitia! Nisi culpa libero dicta suscipit tempora.</p>
               </div>
           <div className="name"><i class="fa regular fa-minus"></i> Maira khan</div>
           
            </div></SwiperSlide>
        <SwiperSlide>   <div className="people-card">
        <div className="img">
               <img src="/image/person_2.jpg" alt="" />
               </div>
               
               <div className="des">
               <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis qui ipsum beatae optio et commodi, minima doloribus magni, dolore nostrum nisi vero, labore aspernatur libero rem harum recusandae mollitia! Nisi culpa libero dicta suscipit tempora.</p>
               </div>
           <div className="name"><i class="fa regular fa-minus"></i> Haris</div>
           
            </div></SwiperSlide>
       
       
      </Swiper>

      

    </>
  )
}

export default People
