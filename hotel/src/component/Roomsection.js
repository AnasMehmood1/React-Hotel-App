import React from 'react'
import "./Roomsectionstyle.css"
const Roomsection = (room) => {
  return (
    <>
      <div className={room.Roomsection}>
          
          <div className="great">
            <div className="offer">
                <h1>Great Offers</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque doloremque incidunt dolores quia temporibus unde labore, saepe aperiam assumenda ducimus excepturi fugiat tempore voluptatem sit cum quaerat, quo totam placeat?</p>
            </div>
          </div>

        <div className={room.Room_card_section}>
            <div className={room.col_1}>
                <img src="/image/img_1.jpg" alt="" />
            </div>
            <div className={room.col_2}>
                <div className={room.text_area}>
                    <p><span>$199</span>/ Per Night</p>
                    <h4>{room.name}</h4>
                    <p className='t-area'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, ipsa possimus, rerum ea quam rem sit placeat quaerat ducimus eaque tempora dolorum quod, provident ex.</p>
                    <div className="room_btn">Book Now</div>
                </div>
            </div>
        </div>
        <div className={room.Room_card_section_reverse}>
            <div className={room.col_1}>
                <img src="/image/img_2.jpg" alt="" />
            </div>
            <div className={room.col_2}>
                <div className={room.text_area}>
                    <p><span>$199</span>/ Per Night</p>
                    <h4>{room.name_1}</h4>
                    <p className='t-area'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, ipsa possimus, rerum ea quam rem sit placeat quaerat ducimus eaque tempora dolorum quod, provident ex.</p>
                    <div className="room_btn">Book Now</div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Roomsection
