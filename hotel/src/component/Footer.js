import React from 'react'
import "./Footerstyle.css"
const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <div className="top">
            <div>
                <ul>
                    <li>About Us</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Rooms</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>The Rooms & Suites</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Resturant</li>
                </ul>
            </div>
            <div>
                <h4 className='h4'><i class="fa-solid fa-location-dot"></i>  Address :</h4>
                <p>198 West 21th Street, <br />
Suite 721 New York NY <br /> 10016</p>
<h4 className='h4'><i class="fa-solid fa-phone"></i> Phone :</h4>
<p>03146261904</p>
<h4 className='h4'><i class="fa-solid fa-envelope"></i> E-mail </h4>
<p>anasmehmoodetc@gmail.com</p>
            </div>
            <div>
                <h5>Signup for our newsletter</h5>
                <div className="input"><input type="text"  placeholder='Email' /><i class="fa-solid fa-paper-plane"></i></div>
                
            </div>
        </div>
        <div className="bottom">
            <div className="bottom-text">
             <p>&copy; Copyright powererd By Anas Mehmood</p>
            </div>
            <div className='icon'>
                <ul>
                    <li><i class="fa-brands fa-facebook-f"></i></li>
                    <li><i class="fa-brands fa-instagram"></i></li>
                    <li><i class="fa-brands fa-behance"></i></li>
                   <li><i class="fa-brands fa-x-twitter"></i></li>

                </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
