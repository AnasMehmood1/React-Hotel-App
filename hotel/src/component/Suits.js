import React from 'react'
import "./Suitstyle.css"
const Suits = (item) => {
  return (
   <>
   <div className="section-1">
    <div className="heading-container">
       <h1>{item.title}</h1>
       <p>{item.des}</p>
    </div>
    <div className="row">
        <div className="image-row">
            <img src={item.image1} alt="image1" />
            <h3>Single Room</h3>
            <p>$200 / PER NIGHT</p>
        </div>
        <div className="image-row">
            <img src={item.image2} alt="image2" />
            <h3>Family Room</h3>
            <p>$200 / PER NIGHT</p>
        </div>
        <div className="image-row">
            <img src={item.image3} alt="image3" />
            <h3>Presidental Room</h3>
            <p>$200 / PER NIGHT</p>
        </div>
    </div>
    </div>
   </>
  )
}

export default Suits
