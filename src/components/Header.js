import React from 'react'
import './Header.css'
// import logo from '../assets/ava.png'
import resume from '../assets/Resume.pdf'




const Header = () => {
  return (
    <div className="header">
       <div className="header__logo">

           <h2> " Uzair Hussain "</h2>

       </div>
       
       <div className="header__links">
      <h3 className="link hvr-sweep-to-left"><a href="#h1">Home</a></h3> 
      <h3 className="link hvr-sweep-to-left"><a href="#p1">Projects</a></h3> 
      <h3 className="link hvr-sweep-to-left"><a href="#c4">Contact</a></h3> 


       </div>

       <button className="header__btn "><a href={resume} download> Get Resume</a></button>

    </div>
  )
}

export default Header