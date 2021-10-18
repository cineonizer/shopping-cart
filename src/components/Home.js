import React, { useEffect } from 'react';
import backgroundVideo from '../assets/videos/film-burns.mp4';
import featuredImage from '../assets/images/featured.jpeg';
import shopNowImage from '../assets/images/shopnow.jpeg';
import image1 from '../assets/images/slide-1.jpeg';
import image2 from '../assets/images/slide-2.jpeg';
import image3 from '../assets/images/slide-3.jpeg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.scss';
import '../styles/home.scss';

const Home = () => {
  useEffect(() => {
    const welcomeScreen = document.querySelector('.welcome-screen-container');

    // deactivates the scroll because the user can scroll the div behind
    // document.body.style.overflow = 'hidden';

    // a function that will translate the welcome screen
    const setTransform = () => {
      welcomeScreen.style.transform = 'translateY(-100%)';
      // a timeout before the user is allowed to start scrolling
      setTimeout(() => {
        document.body.style.overflow = '';
      }, 1100);
    };

    // a timeout so that the welcome screen can fully display before user is allowed to interact
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
      welcomeScreen.removeEventListener('wheel', setTransform);
      welcomeScreen.removeEventListener('click', setTransform);
    };
  }, []);

  return (
    <div className="home">
      <div className="welcome-screen">
        <div className="welcome-screen-container">
          <div className="welcome-screen-message-container">
            {/* <span className="welcome-screen-message">endless.</span>
            <span className="welcome-screen-message">luxury.</span> */}
          </div>
        </div>
      </div>
      <div className="main">
        <div className="main-container">
          <div className="featured-image">
            <img src={featuredImage} alt="close up of a diamond" />
          </div>
          <div className="main-message">
            A diamond is made up of just one kind of atom, many times over:
            carbon. Its complete chemical formula is exquisitely simple: C. Yet,
            as a matter of chemical fact, the same carbon atoms, differently
            arranged, yield not a sparkling diamond, but gray pencil lead.
            <br />
            <br />
            The diamond is in the details.
          </div>
          <div className="carousel-container">
            <Carousel
              infiniteLoop
              autoPlay
              showArrows={false}
              showThumbs={false}
              showStatus={false}
            >
              <div className="image">
                <img src={image1} alt="Slide" />
              </div>
              <div className="image">
                <img src={image2} alt="Slide" />
              </div>
              <div className="image">
                <img src={image3} alt="Slide" />
              </div>
            </Carousel>
          </div>
          <div className="shop-now-container">
            <img src={shopNowImage} alt="Diamond pendant"/>
          </div>
          <video className="videoTag" autoPlay loop muted>
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Home;
