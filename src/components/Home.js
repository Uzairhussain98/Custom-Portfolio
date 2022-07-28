import React from 'react'
import './Home.css'
import image from '../assets/k9.svg'
import resume from '../assets/Resume.pdf'
import Fade from 'react-reveal/Fade';


const Home = () => {
  return (
    <Fade duration={3000}>
    <div className="home" id="h1">
        <div className="text">
            <h1>Hi 👋 <br/> I'm Uzair Hussain </h1>
            <p>A Tech enthusiast and an organized individual seeking an entry-level position in the 
              field of software development. Skilled at developing front-end using react.js , Currently learning blockchain. 
              Creative, and willing to contribute ideas and learn new things. </p>
            <button className="btn"><a href={resume} download> Download Resume</a></button>
        </div>

        <div className="illus">
            <img className="img" src={image} alt="illustration"/>

        </div>

      
    </div>
    </Fade>
  )
}

export default Home
