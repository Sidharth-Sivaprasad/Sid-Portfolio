import React, { useState } from 'react';
import  './leftBackgroundAndText.css';

const PhotographerLeftBackgroundAndText = () => {

  const [backgroundImage, setBackgroundImage] = useState(process.env.PUBLIC_URL + '/external/rectangle2132-huyr-1000w.png'); // Set the initial background image path

  // Function to set the background image initially
  const setInitialBackgroundImage = () => {
    setBackgroundImage(process.env.PUBLIC_URL + '/external/rectangle22183-ehk8-1000w.png'); // Set the new background image path
  };

  // Call the function to set the background image initially
  useState(setInitialBackgroundImage);

  return (
    <div className="leftBackgroundAndText">
     <div className="background_left" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <span className="frame2_text" style={{ color: 'black' }}>
        <span>
          <span className="frame2_text1">Hi .</span>
          <br />
          <span className="frame2_text2">I’m Sid.</span>
          <br />
          <span style={{ fontSize: '1.2em' }}>[<span style={{ fontSize: '1em' }}>O</span>"]: &#123;</span>
          <br />
          <span>Photographer </span>
          <br />
          <span>Content Creator</span>
          <br />
          <span>Creative Thinker</span>
          <br />
          <span>&#125;</span>
          <br />
        </span>
      </span>
    </div>
    </div>
  );
};

export default PhotographerLeftBackgroundAndText;
