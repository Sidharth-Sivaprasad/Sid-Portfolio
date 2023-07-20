import React from 'react';
import { useCallback } from 'react';
 import { loadFull } from 'tsparticles';
 import Particles from 'react-tsparticles';
import ProjectCard from './ProjectCard';

import  "./portfolio.css";


const Portfolio = () => {

  const ParticlesConfig = {
    autoplay: true,
    
    particles: {
      number: {
        value: 50,
        density: {
          enable: false,
          value_area: 1000,
        },
      },
      color: {
        value: '#fff',
      },
      shape: {
        type: 'circle',
        
      },
      opacity: {
        value: 0.8,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 8,
        random: false,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      rotate: {
        value: 0,
        random: true,
        direction: 'clockwise',
        animation: {
          enable: true,
          speed: 5,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 600,
        color: '#ffffff',
        opacity: 0.4,
        width: 2,
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: 'bubble',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 400, // Adjust the distance of repulsion (higher values will push particles farther)
          duration: 0.9, // Adjust the duration of the repulsion effect
          speed: 1, // Adjust the speed of particles when moving away
          // Other repulse parameters can be adjusted here
        },
        push: {
          particles_nb: 10,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
    background: {
      color: '#147987',
      image: '',
      position: '50% 50%',
      repeat: 'no-repeat',
      size: 'cover',
    },
  };


  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  // Solo projects data
  
  return (
    <section id="profile">
      <div className="particle_background">
      
      <Particles
        id='tsparticles'
        particlesLoaded='particlesLoaded'
        init={particlesInit}
        loaded={particlesLoaded}
        options={ParticlesConfig}
      />
    </div>
    <h1 className="heading" >RECENT PROJECTS</h1>

    <div className="cardsContainer">
    
        
        
    <ProjectCard  />
        
      </div>
    
    
        
       
    </section>
  );
};

export default Portfolio;