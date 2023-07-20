

import React, { useState } from 'react';
import './Homepage.css'
import PhotographerLeftBackgroundAndText from './PhotographerLeftBackgroundAndText';
import CoderLeftBackgroundAndText from './CoderLeftBackgroundAndText';
import PhotographerRightBackgroundAndText from './PhotographerRightBackgroundAndText';
import CoderRightBackgroundAndText from './CoderRightBackgroundAndText';
import Portfolio from './Portfolio';

const Homepage = () => {

    const [isFlipped, setIsFlipped] = useState(false);
  const [imageSrc, setImageSrc] = useState('/external/ellipse2123-93g-600h.png');
  const [activeIcon, setActiveIcon] = useState('coder');

  const photoView = () => {
  
    if (isFlipped === false) {
        setIsFlipped(!isFlipped);
        setImageSrc('/external/ellipse22184-fr38-600h.png');
        setActiveIcon('photo');

    }
  };

  const coderView = () =>{
    if (isFlipped === true) {
        setIsFlipped(!isFlipped);
        setImageSrc('/external/ellipse2123-93g-600h.png');
        setActiveIcon('coder');
    }

  }; 

  return (
    <div >
     <div className="container">
        <div className="row">
        <div className="col">
          <img
            src="/external/dev_icon2.png"
            className={` ${activeIcon === 'coder' ? 'active-icon' : ''}`}
            style={{ width: '60px', height: '60px' }}
            alt="Dev"
            onClick={coderView}
          />
        </div>
        <div className="col">
          <img
            src="/external/cam_icon.png"
            className={` ${activeIcon === 'photo' ? 'active-icon' : ''}`}
            style={{ width: '60px', height: '60px' }}
            alt="Cam"
            onClick={photoView}
          />
        </div>
      </div>
      
      {isFlipped ? <PhotographerLeftBackgroundAndText/>  : <CoderLeftBackgroundAndText/>} 
      <div className="flippableContainer">
        <div className={`flippable ${isFlipped ? 'flip' : ''}`} >
          <div className="front" style={{ backgroundImage: `url(${imageSrc})` }}></div>
          <div className="back" style={{ backgroundImage: `url(${imageSrc})` }}></div>
        </div>
      </div>
      {isFlipped ?  <PhotographerRightBackgroundAndText/>  : <CoderRightBackgroundAndText/>}
    </div> 
    
    {isFlipped ? <></> : <div className="container"><Portfolio /> </div> }
    
    </div>
  );
  
};

export default Homepage;