import React, { useState } from 'react';
import  './rightBackgroundAndText.css';

const CoderRightBackgroundAndText = () => {
  const [rightBackgroundSrc, setRightBackgroundSrc] = useState(process.env.PUBLIC_URL + '/external/coder-right.png');

  const setInitialBackgroundImage = () => {
    setRightBackgroundSrc(process.env.PUBLIC_URL +'/external/coder-right.png'); // Set the new background image path
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
    const resumeUrl = process.env.PUBLIC_URL + '/external/Sid_Resume.pdf'; 
    window.open(resumeUrl, '_blank'); // Opens the document in a new tab
  };

  const openGmailCompose = () => {
    const email = 'sivaprasadsidharth@gmail.com'; // Replace with your Gmail address
    const subject = 'Get In Touch'; // Set the subject for the email
    const body = 'Hello, I would like to get in touch with you.'; // Set the body for the email
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  };

  return (
    <div className="rightBackgroundAndText">
      <div className="background_right" style={{ backgroundImage: `url(${rightBackgroundSrc})` }}>
        <div className="buttonsContainer">
          <button className="button" onClick={scrollToProfile}>
            <img src={process.env.PUBLIC_URL + '/external/rectangle3260-i56d-200h.png'} alt="Button 1" className="buttonImage" />
            <span className="buttonText">Profile</span>
          </button>
          <button className="button" onClick={openResume}>
            <img src={process.env.PUBLIC_URL + '/external/rectangle3260-i56d-200h.png'} alt="Button 2" className="buttonImage" />
            <span className="buttonText">Resume</span>
          </button>
          <button className="button" onClick={openGmailCompose}>
            <img src={process.env.PUBLIC_URL + '/external/rectangle3260-i56d-200h.png'} alt="Button 3" className="buttonImage" />
            <span className="buttonText">Contact Me</span>
          </button>

          <div className="iconContainer">
            <a href='https://github.com/Sidharth-Sivaprasad' target="_blank" rel="noopener noreferrer">
              <img src={process.env.PUBLIC_URL + '/external/icone-github.png'} alt="Icon 1" className="icon" />
            </a>
            <a href='https://www.linkedin.com/in/sidharth-k-s/' target="_blank" rel="noopener noreferrer">
              <img src={process.env.PUBLIC_URL + '/external/linkedin-icon.png'} alt="Icon 2" className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoderRightBackgroundAndText;




