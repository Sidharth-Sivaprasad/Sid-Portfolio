import React from 'react';
import  './ProjectCard.css';

const ExpCard = () => {
  const exp = [
    {
      id: 1,
      title: "Tata Consultancy Services",
      img: '/external/tcs.png',
      role:"Data Engineer",
      date:"Jan 2021 - Dec 2021",
      description: "https://github.com/Rasif-Taghizada/Educational-Website-ReactJs",
      website:"https://www.tcs.com/"
    },
    {
      id: 2,
      title: "Cloudsys Analytics",
      img: '/external/cloud.jpeg',
      role:"Software Engineer - Intern",
      date: "Oct 2020 - Dec 2020",     
      description: "",
      website:"http://cloudsysanalytics.com/"
    },
    
  ];

  return (
    <>
      {exp.map((project) => (
        <div key={project.id} className="exp_card">
          <img src={`${process.env.PUBLIC_URL}${project.img}` || "https://www.example.com/example.png"} alt={project.title} className="exp_image" />
          <div className="exp_content">
          <h2 className="exp_title">{project.title}</h2>
          <p className="exp_position">{project.role}</p>
          <p className="exp_date">{project.date}</p>
          <div className="exp_links-container">
          <div className="exp_links">
            <a href={project.description} target="_blank" rel="noopener noreferrer" >View Description</a>
            </div>
            <div className="exp_links">
            <a href={project.website} target="_blank" rel="noopener noreferrer" >View Website</a>
            </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ExpCard;
