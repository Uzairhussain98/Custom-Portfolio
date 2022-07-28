import React from 'react'
import './Contact.css'
import avatar from '../assets/ava.png'
import { SocialIcon } from 'react-social-icons';
import Slide from 'react-reveal/Slide';





const Contact = () => {
  return (
    <div className="contact" id="c4">
        <h1>CONTACT INFO</h1>
        <div className="container">
            <Slide left duration={2000}>
            <img src={avatar} alt="aaa" className="ava"/>

            </Slide>
            {/* <img src={avatar} alt="aaa" className="ava"/> */}

            <div className="details">
            <p><em>+92314-3779143</em></p>
            <p><em>uzairhussain98@hotmail.com</em></p>
            {/* <p><em>This text is emphasized.</em></p> */}
            </div>

            <Slide right duration={2000}>
            <div className="social">
            <SocialIcon url="https://www.linkedin.com/in/uzair-hussain-00b1b01a0/" className="icon"  />
            <SocialIcon url="https://www.facebook.com/ozair.hussain.980/" className="icon" />
            <SocialIcon url="https://github.com/Uzairhussain98" className="icon"/>
            <SocialIcon url="https://instagram.com" className="icon" />

            </div>
            </Slide>

        </div>
    </div>
  )
}

export default Contact
