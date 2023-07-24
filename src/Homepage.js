import React, { useState, useEffect, } from 'react';
import './Homepage.css'
import PhotographerLeftBackgroundAndText from './PhotographerLeftBackgroundAndText';
import CoderLeftBackgroundAndText from './CoderLeftBackgroundAndText';
import PhotographerRightBackgroundAndText from './PhotographerRightBackgroundAndText';
import CoderRightBackgroundAndText from './CoderRightBackgroundAndText';
import Portfolio from './Portfolio';

const Homepage = () => {


  const [isFlipped, setIsFlipped] = useState(false);
  const [imageSrc, setImageSrc] = useState(process.env.PUBLIC_URL + '/external/coder_pic.png');
  const [activeIcon, setActiveIcon] = useState('coder');
  const [scrollbarColor, setScrollbarColor] = useState('#f1f1f1');

 

  useEffect(() => {
    // Replace the condition below with your logic to determine when to change the color
    if (isFlipped) {
      setScrollbarColor('#050709'); // Change the color to red
    } else {
      setScrollbarColor('#3AD7ED'); // Change the color back to the default (grey)
    }
  }, [isFlipped]);


  useEffect(() => {
    // Update the document title when the component is mounted or updated
    document.title = isFlipped ? 'Sidharth Photography Portfolio': 'Sidharth Dev Portfolio' ;
    return () => {
      // Reset the document title when the component is unmounted
      document.title = 'Old Tab Title';
    };
  }, [isFlipped]);



  const photoView = () => {
    if (isFlipped === false) {
        setIsFlipped(!isFlipped);
        setImageSrc(process.env.PUBLIC_URL + '/external/photo_pic.png');
        setActiveIcon('photo');
    }
  };

  const coderView = () =>{
    if (isFlipped === true) {
        setIsFlipped(!isFlipped);
        setImageSrc(process.env.PUBLIC_URL + '/external/coder_pic.png');
        setActiveIcon('coder');
    }
  }; 

  return (
    <div>
     <div className="container">
        <div className="row">
        <div className="col">
          <img
            src={process.env.PUBLIC_URL + '/external/dev_icon2.png'}
            className={` ${activeIcon === 'coder' ? 'active-icon' : 'inactive-icon'}`}
            style={{ width: '4vw', height: '4vw' }}
            alt="Dev"
            onClick={coderView}
          />
        </div>
        <div className="col">
          <img
            src={process.env.PUBLIC_URL + '/external/cam_icon.png'}
            className={` ${activeIcon === 'photo' ? 'active-icon' : 'inactive-icon'}`}
            style={{  width: '4vw', height: '4vw' }}
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
    
    <footer className="footer">
      <span>Developed by Sidharth :}</span>
    </footer>

    <style>
        {`
          /* Works on Chrome, Edge, and Safari */
          ::-webkit-scrollbar {
            background-color: 'black' ;
            width: 10px;
          }

          ::-webkit-scrollbar-thumb {
            background-color: ${scrollbarColor};
            border-radius: 5px;
          }
        `}
      </style>
    </div>
  );  
};

export default Homepage;