import React from 'react'
import './Contact.css'
import avatar from '../assets/ava.png'
import { SocialIcon } from 'react-social-icons';




const Contact = () => {
  return (
    <div className="contact" id="c4">
        <h2>Contact Info</h2>
        <div className="container">
            <img src={avatar} alt="aaa" className="ava"/>

            <div className="details">
            <p><em>+923143779143</em></p>
            <p><em>uzairhussain98@hotmail.com</em></p>
            <p><em>This text is emphasized.</em></p>
            </div>

            <div className="social">
            <SocialIcon url="https://linkedin.com/in/jaketrent" className="icon"  />
            <SocialIcon url="https://facebook.com/in/jaketrent" className="icon" />
            <SocialIcon url="https://github.com/in/jaketrent" className="icon"/>
            <SocialIcon url="https://instagram.com/in/jaketrent" className="icon" />

            </div>


        </div>
    </div>
  )
}

export default Contact
