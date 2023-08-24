import React from 'react'
import "./Welcomestyle.css"
const Welcome = () => {
  return (
         <>
         <div className="section">
          <div className="center-box">
            <div className="box">
              <div className="label">
           <p>Check In</p>
              <input type="text" />
              </div>
              <div className="label">
             <p>Check Out</p>
              <input type="text" />
              </div>
              <div className="adult">
                <h5 className='adult_heading'>Adults</h5>
                <div className="adult-box">
                 <div className="1">1</div>
                  <i class="fa fa-angle-down"></i>
                </div>
              </div>
              <div className="child">
                <h5 className='chlid_heading'>Children</h5>
                <div className="child-box">
                  <div className="1">1</div>
                  <i class="fa fa-angle-down"></i>
                </div>
              </div>
                
                <div className="checkbtn">
                  Check Availabilty
                </div>
            </div>
          </div>
            <div className="container">
            <div className="first">
               <div className="first-det">
                <h1>Welcome!</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <div className="button">
                   <div className="btn">Learn More</div>
                  <span className='or'>or</span>
                    <p>SEE</p>
                </div>
                <p>VIDEO</p>
               </div>
            </div>
            <div className="second">
                <div className="image">
                    <img src="/image/img_1.jpg" alt="" />
                </div>
              <div className="corner">
              <img src="/image/food-1.jpg" alt="" />
              </div>
            </div>
            </div>
         </div>
         </>
  )
}

export default Welcome
