import React from 'react'
import './Projects.css'
import MediaCard from './Card'
import cycle from '../assets/cycle.gif'
import orbit from '../assets/orbit.png'
import metamask from '../assets/connect-metmask.png'



import useWebAnimations from "@wellyshen/use-web-animations";



const Projects = () => {

  const { ref } = useWebAnimations({
    keyframes: {
      transform: ["translateX(900%)" ,"translateX(-900%)"], // Move by 500px

    },
    animationOptions: {
      delay: 1000, // Start with a 500ms delay
      duration: 15000, // Run for 1000ms
      iterations: 10000000,
      // direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },

  });


  return (
    <div className="projects" id="p1" >
        <h1>Projects</h1>
        <div className="collection">
       

         <MediaCard image={orbit} descripition="asdasdsadasd" title="Soon"/>
         <MediaCard image={metamask} descripition="asdasdsadasd" title="Soon"/>
         <MediaCard image={orbit} descripition="asdasdsadasd" title="Soon"/>
         <MediaCard image={orbit} descripition="asdasdsadasd" title="Soon"/>
         <MediaCard image={orbit} descripition="asdasdsadasd" title="Soon"/>
         <MediaCard image={orbit} descripition="asdasdsadasd" title="Soon"/>

         
         








        </div>

        <img ref={ref} src={cycle} alt="cycle" className="cycle" />
      
    </div>
  )
}

export default Projects
