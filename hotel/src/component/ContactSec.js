import React from 'react'
import "./ContactStyle.css"
const ContactSec = () => {
  return (
    <div>
      <div className="contact_section">
        <div className="Contact_section_container">
            <div className="left_container">
                <div className="first_left">
                <div className="left_col_1">
                    <h5>Name</h5>
                    <input type="text" className='name' />
                </div>
                <div className="left_col_2">
                    <h5>Phone</h5>
                    <input type="text" className='phone'/>
                </div>
                
                </div>
                <div className="sec_left">
                    <h5>E-mail</h5>
                    <input type="text"  className='email'/>
                </div>
              
                <div className="note">
                    <label htmlFor="message"> Write a Message</label>
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                </div>
                <div className="contactbutton">
                    Reverse Now
                </div>
            </div>
            <div className="right_container">
                <div className="right_text">
                    <div className="address">
                        <h6>Address :</h6>
                        <p className="add">Lorem ipsum dolor sit <br /> amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="no">
                        <h6>Phone :</h6>
                        <p className="num">03146261904</p>
                    </div>
                    <div className="em">
                        <h6>E-mail :</h6>
                        <p className="eml">anasmehmoodvip@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSec
