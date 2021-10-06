import React from 'react';
import videoSource from '../components/assets/videos/film-burns.mp4';
import featuredImageSource from '../components/assets/images/featured.jpeg';
import '../styles/home.scss';

const Home = () => {
  return (
    <div className="home">
      <img className="featured-image" src={featuredImageSource} alt="Endless featured" />
      <video className="videoTag" autoPlay loop muted>
        <source src={videoSource} type="video/mp4" />
      </video>
    </div>
  );
};

export default Home;
