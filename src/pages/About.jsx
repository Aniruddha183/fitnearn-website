import React from "react";

import tick from "../assets/tick_mark.png";
import "./Home.css";
import { useRef,useState,useEffect } from "react";
import playIcon from '../assets/playicon.png';
import pauseIcon from '../assets/pauseicon.png';
import meeting from "../assets/meeting.mp4"

const About = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  
  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }

    
    

  };
  return (
    <div className="home">
      <div>
      <div style={{ position: 'relative', width: '550px', height: '350px', marginLeft: '-30px' }}>
      <video
            ref={videoRef}
            style={{ width: '100%', height: '100%', borderRadius: '120px' }}
            src={meeting}
            muted
          ></video>
      <button
        onClick={handlePlayPause}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          margin:"auto"
        }}
      >
        <img src={isPlaying ? pauseIcon : playIcon}  />
      </button>
    </div>
            
      </div>
      <div style={{marginLeft:"-90px"}} className="home-info">
        <h1>
          How we will <span> benifit Us</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. At fermentum dictum in
          dictumst sit eu.
        </p>
        <div className="tick-mark-div">
          <img className="tick-mark" src={tick} alt="" />
          <span>Explore a variety of fresh educational teach</span>
        </div>
        <div className="tick-mark-div">
          <img className="tick-mark" src={tick} alt="" />
          <span>Re-imagined interective video learning</span>
        </div>
        <div className="tick-mark-div">
          <img className="tick-mark" src={tick} alt="" />
          <span>True white level course platform</span>
        </div>
      </div>
    </div>
  );
};

export default About;
