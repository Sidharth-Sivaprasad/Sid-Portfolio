import React, { useState } from 'react';
import  './rightBackgroundAndText.css';

const CoderRightBackgroundAndText = () => {
  const [rightBackgroundSrc, setRightBackgroundSrc] = useState('/external/rectangle1131-uchi-1000w.png');

  const setInitialBackgroundImage = () => {
    setRightBackgroundSrc('/external/coder-right.png'); // Set the new background image path
  };

  // Call the function to set the background image initially
  useState(setInitialBackgroundImage);


  const scrollToProfile = () => {
    const profileSection = document.getElementById('profile');
    if (profileSection) {
      profileSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openResume = () => {
    const resumeUrl = '/external/Sid_Resume.pdf'; 
    window.open(resumeUrl, '_blank'); // Opens the document in a new tab
  };

  return (
    <div className="rightBackgroundAndText">
      <div className="background_right" style={{ backgroundImage: `url(${rightBackgroundSrc})` }}>
        <div className="buttonsContainer">
          <button className="button" onClick={scrollToProfile}>
            <img src="/external/rectangle3260-i56d-200h.png" alt="Button 1" className="buttonImage" />
            <span className="buttonText">Profile</span>
          </button>
          <button className="button" onClick={openResume}>
            <img src="/external/rectangle3260-i56d-200h.png" alt="Button 2" className="buttonImage" />
            <span className="buttonText">Resume</span>
          </button>
          <button className="button">
            <img src="/external/rectangle3260-i56d-200h.png" alt="Button 3" className="buttonImage" />
            <span className="buttonText">Contact Me</span>
          </button>

          <div className="iconContainer">
            <a href='https://github.com/Sidharth-Sivaprasad' target="_blank" rel="noopener noreferrer">
              <img src="/external/icone-github.png" alt="Icon 1" className="icon" />
            </a>
            <a href='https://www.linkedin.com/in/sidharth-k-s/' target="_blank" rel="noopener noreferrer">
              <img src="/external/linkedin-icon.png" alt="Icon 2" className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoderRightBackgroundAndText;




