import React from 'react';
import videoSource from '../components/assets/videos/film-burns.mp4';
import featuredImageSource from '../components/assets/images/featured.jpeg';
import '../styles/home.scss';

const Home = () => {
  return (
    <div className="home">
      <div className="welcome">
        <div className="welcome-container">
          <div className="welcome-message-container">
            <span className="welcome-message">endless.</span>
            <span className="welcome-message">luxury.</span>
          </div>
        </div>
      </div>
      <div className="main">
        <video className="videoTag" autoPlay loop muted>
          <source src={videoSource} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Home;
