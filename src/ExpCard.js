import React, { useState, useEffect } from 'react';
import './ProjectCard.css';

const ExpCard = () => {
  const exp = [
    {
      id: 1,
      title: "Tata Consultancy Services",
      img: '/external/tcs.png',
      role: "Data Engineer",
      date: "Jan 2021 - Dec 2021",
      description: "◦ Led a team of 4 people responsible for data engineering for Amgen, where I leveraged a range of tools including Databricks, Oracle, AWS S3, and Redshift databases to pipeline sensitive medical data. <br /><br /> ◦ Working in an agile environment, I ensured 99.97% availability of data processing servers while creating and maintaining large-scale data for offshore clients. Through this experience, I developed an understanding of the importance of data security and quality control in serving the needs of clients and gained valuable skills in project management, team collaboration, and problem-solving.",
      website: "https://www.tcs.com/"
    },
    {
      id: 2,
      title: "Cloudsys Analytics",
      img: '/external/cloud.jpeg',
      role: "Software Engineer - Intern",
      date: "Oct 2020 - Dec 2020",
      description: "◦ Worked in a team that led the development and deployment of proprietary technology Kloudpad FR - Facial Recognition System for employees and loyalty customers for a pan-India retail chain. <br /><br /> ◦ By implementing the CloudVision API, the data collected through facial recognition was analyzed in real-time using Tableau. This allows for informed action to be taken, such as personalized marketing or customer service interactions, which can lead to an improved customer experience.",
      website: "http://cloudsysanalytics.com/"
    },
    {
      id: 2,
      title: "Zoft Solutions Pvt. Ltd.",
      img: '/external/zoft.jpeg',
      role: "Software Engineering Intern",
      date: "July 2018",
      description: "◦ Development of a module in the product School Wizard - aimed at child capability enhancement <br /><br /> ◦ Designed and implemented an application to generate Barcodes using Spring MVC and deployed the Javaapplication using Apache Tomcat server. This experience taught me valuable skills in application development,testing, and deployment in a real-world environment.",
      website: "https://www.zoftsolutions.com/"
    },
    // Add more experience data here...
  ];

  const [showDescription, setShowDescription] = useState(false);
  const [currentDescription, setCurrentDescription] = useState('');

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.classList.contains("popup")) {
        handleCloseDescription();
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleViewDescription = (description) => {
    setCurrentDescription(description);
    setShowDescription(true);
  };

  const handleCloseDescription = () => {
    setShowDescription(false);
  };

  return (
    <>
      {exp.map((project) => (
        <div key={project.id} className="exp_card">
          <img src={`${process.env.PUBLIC_URL}${project.img}`} alt={project.title} className="exp_image" />
          <div className="exp_content">
            <h2 className="exp_title">{project.title}</h2>
            <p className="exp_position">{project.role}</p>
            <p className="exp_date">{project.date}</p>
            <div className="exp_links-container">
              <div className="exp_links">
                <button onClick={() => handleViewDescription(project.description)}>View Description</button>
              </div>
              <div className="exp_links">
                {project.website && (
                  <button onClick={() => window.open(project.website, '_blank')}>View Website</button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {showDescription && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleCloseDescription}>&times;</span>
            <p className="description" dangerouslySetInnerHTML={{ __html: currentDescription }}></p>
          </div>
        </div>
      )}
    </>
  );
};

export default ExpCard;
