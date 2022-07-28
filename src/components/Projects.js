import React from 'react'
import './Projects.css'
import MediaCard from './Card'
import cycle from '../assets/cycle.gif'
import orbit from '../assets/orbit.png'
import metamask from '../assets/connect-metmask.png'
import amazon from '../assets/amazon.png'
import netflix from '../assets/netflix.png'
import tesla from '../assets/tesla.png'
import robust from '../assets/robust.png'
import venom from '../assets/venom.png'
import airsial from '../assets/airsial.png'
import cyberpunk from '../assets/cyberpunk.png'
import port from '../assets/port.png'
import Slide from 'react-reveal/Slide';









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
        <h1>CHECK OUT SOME OF MY WORKS</h1>
        <div className="collection">
        <Slide bottom duration={2000}>


         <MediaCard
          image={amazon}
          descripition="Amazon UI Clone Made With React.js And Google Firebase With Login Functionality " 
          title="Amazon Clone" 
          link="https://clone-d68ad.web.app/"
          />
         
         <MediaCard 
          image={netflix} 
          descripition="Netflix Clone Made Using React.js" 
          title="Netflix Clone"
          link="https://netflix-clone-72030.web.app/"
          />
         
          <MediaCard
          image={tesla}
          descripition="Tesla UI Clone Made Using React.js And Styled Components " 
          title="Tesla Clone" 
          link="https://tesla-clone2.surge.sh/"
          />
         
         <MediaCard 
          image={cyberpunk} 
          descripition="An Nft Showcase Site *May not work properly beacuse of API*" 
          title="Cyber-Punks Showcase"
          link="https://cyber-punks.surge.sh/"
          />

           <MediaCard
          image={orbit}
          descripition="A Simple Single-Page Website Made Using React.js" 
          title="Orbit" 
          link="https://orbit-.surge.sh"

          />
         
         <MediaCard 
          image={robust} 
          descripition="A Simple Multi-Page Website Made Using React.js" 
          title="Robust Tech"
          link="https://robusttech.surge.sh/"
          />
         
         <MediaCard
          image={venom}
          descripition="A Simple Single-Page Website Made Using React.js With Some Added Animations" 
          title="Venom Tech"
          link="https://venomtech.surge.sh/"
 
          />
         
         <MediaCard 
          image={airsial} 
          descripition="An Airline Website Cloned Using React.js" 
          title="Air-Sial"
          link="https://air-sial.surge.sh/"

          />
         
         <MediaCard
          image={metamask}
          descripition="An App That Only Integrates Ethereum Blockchain Wallet To The Site " 
          title="Metamask Integration" 
          link="https://wallet-integrate.surge.sh"

          />
         
         <MediaCard 
          image={port} 
          descripition="A Custom Made Clean And Concise Portfolio build for myself using React.js" 
          title="Custom Portfolio"
          link="https://uzairhussain.netlify.app/"

          />
         
         </Slide>


        </div>

        <img ref={ref} src={cycle} alt="cycle" className="cycle" />
      
    </div>
  )
}

export default Projects
