import React from 'react';
import  './ProjectCard.css';

const ProjectCard = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Gun Violence Tracker Using Semantic Data Integration",
      img: '/external/gun_violence.png',
      description:
        "A Semantic Web based application using React.js that can provide interactive information/statistics on gun violence incidents in the United States. Used Ontology model tostructure and organise the semantic data processed from over 30,000 data entries, which was queried using a Fuseki server",
      technologies: "React Js | Springboot | Semantic Web",
      github: "https://github.com/Sidharth-Sivaprasad/SER-531-Gun_Violence_tracker_and_Analyser",
    },
    {
      id: 2,
      title: "Rover Simulation using Unity & ROS 2",
      img: '/external/unity-rover.jpeg',
      description:
        "Developed the model and control system for an autonomous rover model that detects obstacles and moves autonomously through a maze, mapping the environment. Unity was used to develop theenvironment and ROS2 to develop the rover",
      technologies: "Unity | ROS2",     
      github: "https://github.com/Sidharth-Sivaprasad/SER515-Spring22-Team8",
    },
    {
      id: 3,
      title: "Portfolio",
      img: '/external/portfolio.png',
      description: "My React portfolio showcases my passion for web development and displays my skills and accomplishments in a visually appealing manner. Using React for my frontend, I have created dynamic and interactive components, making the user experience smooth and engaging.",
      technologies: "ReactJs | NextJs",
      github: "https://github.com/Sidharth-Sivaprasad/Sid-Portfolio",
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
            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
