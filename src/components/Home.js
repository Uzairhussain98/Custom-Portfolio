import React from 'react'
import './Home.css'
import image from '../assets/image.svg'

const Home = () => {
  return (
    <div className="home">
        <div className="text">
            <h1>Uzair Hussain</h1>
            <p>An Organized individual xyz hllwo world of pakistanit was a pleaseure meeting people like you </p>
            <button className="btn">Download Resume</button>
        </div>

        <div className="illus">
            <img className="img" src={image} alt="illustration"/>

        </div>

      
    </div>
  )
}

export default Home
