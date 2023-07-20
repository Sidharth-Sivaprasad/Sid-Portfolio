
import styles from './leftBackgroundAndText.css';
import { useState } from 'react';
import React from 'react';

const CoderLeftBackgroundAndText = () => {

  const [backgroundImage, setBackgroundImage] = useState('/external/rectangle2132-huyr-1000w.png'); // Set the initial background image path


  const setInitialBackgroundImage = () => {
    setBackgroundImage('/external/coder-left.png'); // Set the new background image path
  };

  // Call the function to set the background image initially
  useState(setInitialBackgroundImage);
  return (
    <div className={styles.leftBackgroundAndText}>
      <div className="background_left" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <span className="frame2_text">
        <span>
          <span className="frame2_text1">Hi .</span>
          <br />
          <span className="frame2_text2">I’m Sid.</span>
          <br />
          <span className="frame2_text3">() =&gt; &#123;</span>
          <br />
          <span className="frame2_text4">Engineer </span>
          <br />
          <span className="frame2_text5">Web Developer</span>
          <br />
          <span className="frame2_text6">Innovator</span>
          <br />
          <span className="frame2_text7">&#125;</span>
          <br />
        </span>
      </span>
    </div>
  );
};

export default CoderLeftBackgroundAndText;
