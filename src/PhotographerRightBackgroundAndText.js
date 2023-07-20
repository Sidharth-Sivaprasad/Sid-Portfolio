import React, { useState } from 'react';
import  './rightBackgroundAndText.css';

const PhotographerRightBackgroundAndText = () => {

  const [backgroundImage, setBackgroundImage] = useState(process.env.PUBLIC_URL + '/external/rectangle2132-huyr-1000w.png'); // Set the initial background image path

  // Function to set the background image initially
  const setInitialBackgroundImage = () => {
    setBackgroundImage(process.env.PUBLIC_URL + '/external/rectangle12182-qq7k-1000w.png'); // Set the new background image path
  };

  // Call the function to set the background image initially
  useState(setInitialBackgroundImage);

  return (
    <div className="rightBackgroundAndText">
      <div className="background_right" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="buttonsContainer">
          <button className="button">
            <img src={process.env.PUBLIC_URL + '/external/rectangle3260-i56d-200h.png'} alt="Button 1" className="buttonImage" />
            <span className="buttonText">Portfolio</span>
          </button>
          <button className="button">
            <img src={process.env.PUBLIC_URL + '/external/rectangle3260-i56d-200h.png'} alt="Button 3" className="buttonImage" />
            <span className="buttonText">Contact Me</span>
          </button>

          <div className="iconContainer">
            <a href='https://www.instagram.com/sid_harth_ks/' target="_blank" rel="noopener noreferrer">
              <img src={process.env.PUBLIC_URL + '/external/insta-icon.png'} alt="Icon 3" className="icon" />
            </a>
            <a href='https://www.behance.net/sidhartsivapra' target="_blank" rel="noopener noreferrer">
              <img src={process.env.PUBLIC_URL + '/external/behance-icon.png'} alt="Icon 4" className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotographerRightBackgroundAndText;
