import React from 'react';
import  './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const soloProjects = [
    {
      id: 1,
      title: "Gun Violence Tracker Using Semantic Data Integration",
      img: '/external/gun_violence.png',
      description:
        "A Semantic Web based application using React.js that can provide interactive information/statistics on gun violence incidents in the United States. Used Ontology model tostructure and organise the semantic data processed from over 30,000 data entries, which was queried using a Fuseki server",
      technologies: "React Js | Springboot | Semantic Web",
      link: "https://educational-website-reactjs.netlify.app/",
      github: "https://github.com/Rasif-Taghizada/Educational-Website-ReactJs",
    },
    {
      id: 2,
      title: "Rover Simulation using Unity & ROS 2",
      img: '/external/unity-rover.jpeg',
      description:
        "Developed the model and control system for an autonomous rover model that detects obstacles and moves autonomously through a maze, mapping the environment. Unity was used to develop theenvironment and ROS2 to develop the rover",
      technologies: "Unity | ROS2",
      link: "https://covid-19-tracker-weld-nu.vercel.app/",
      github: "https://github.com/Rasif-Taghizada/Covid-19-Tracking",
    },
    {
      id: 3,
      title: "Portfolio",
      img: '/external/portfolio.png',
      description: "A personal website to showcase myself.",
      technologies: "ReactJs | NextJs",
      link: "https://rubycode-blog-project.vercel.app/",
      github: "https://github.com/Rasif-Taghizada/RubyCode-Blog",
    },
  ];

  return (
    <>
      {soloProjects.map((project) => (
        <div key={project.id} className="card">
          <img src={`${process.env.PUBLIC_URL}${project.img}` || "https://www.example.com/example.png"} alt={project.title} className="image" />
          <h2 className="title">{project.title}</h2>
          <p className="description">{project.description}</p>
          <p className="technologies">{project.technologies}</p>
          <div className="links">
            <a href={project.link} target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
