import React, { useState, useEffect } from 'react';
import videoSource from '../assets/videos/film-burns.mp4';
import mainImageSource from '../assets/images/main.jpeg';
import '../styles/home.scss';

const Home = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const welcomeScreen = document.querySelector('.welcome-screen-container');

    // a function that will translate the welcome screen
    const setTransform = () => {
      welcomeScreen.style.transform = 'translateY(-100%)';
      setTimeout(() => {
        document.body.style.overflow = '';
      }, 1100);
    };

    // a timeout to have the welcome screen display message before user is allowed to interact to swipe away the screen
    setTimeout(() => {
      welcomeScreen.addEventListener('wheel', setTransform);
      welcomeScreen.addEventListener('click', setTransform);
    }, 2400);

    // a timeout to have the welcome screen automatically swipe away after 4.8 seconds
    setTimeout(() => {
      setTransform();
    }, 4800);

    // when component is unmounted remove the event listeners to clean up
    return () => {
      welcomeScreen.removeEventListener('scroll', setTransform);
      welcomeScreen.removeEventListener('click', setTransform);
    };
  }, []);

  return (
    <div className="home">
      <div className="welcome-screen">
        <div className="welcome-screen-container">
          <div className="welcome-screen-message-container">
            <span className="welcome-screen-message">endless.</span>
            <span className="welcome-screen-message">luxury.</span>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="main-container">
          <img src={mainImageSource} alt="close up of a diamond" />
          <div className="main-message">
            A diamond is made up of just one kind of atom, many times over:
            carbon. Its complete chemical formula is exquisitely simple: C. Yet,
            as a matter of chemical fact, the same carbon atoms, differently
            arranged, yield not a sparkling diamond, but gray pencil lead.
            <br />
            <br />
            The diamond is in the details.
          </div>
          <video className="videoTag" autoPlay loop muted>
            <source src={videoSource} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Home;
