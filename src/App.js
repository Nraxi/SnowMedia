import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import onemalesnowboard from './PICS/onemalesnowboard.jpg'
import mountain from './PICS/mountain.jpg'

import snowboards from './PICS/snowboards.jpg'
import Footer from './components/Footer';
import SocialMedia from './components/SocialMedia';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNewTextActive, setIsNewTextActive] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);

    if (!isNewTextActive) {
      setIsNewTextActive(true);
    } else {
      setIsNewTextActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <div>
      <nav
        className={`sticky-nav ${isScrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'mobile-open' : ''}`}
      >
        <div>
          <span className={`menu-text ${isNewTextActive ? 'active' : ''} ${isScrolled ? 'scrolled' : ''}`} onClick={handleMobileMenuToggle}>
            Menu
          </span>
        </div>
        <ul>
          <li><Link to="#start" onClick={() => { scrollToSection('start'); setMobileMenuOpen(false); }}>Start</Link></li>
          <li><Link to="#info" onClick={() => { scrollToSection('info'); setMobileMenuOpen(false); }}>Info</Link></li>
          <li><Link to="#riderone" onClick={() => { scrollToSection('riderone'); setMobileMenuOpen(false); }}>Rider one</Link></li>
          <li><Link to="#ridertwo" onClick={() => { scrollToSection('ridertwo'); setMobileMenuOpen(false); }}>Rider Two</Link></li>
          <li><Link to="#about" onClick={() => { scrollToSection('about'); setMobileMenuOpen(false); }}>About</Link></li>
          <li><Link to="#contact" onClick={() => { scrollToSection('contact'); setMobileMenuOpen(false); }}>Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>

  );
};

const HomePage = () => (
  <div>
    <section id="start" className="custom-section">
      {/* Embedded YouTube video as a background */}
      <iframe
        title="Snowboard Video Background"
        id="video-background"
        src="https://www.youtube.com/embed/mBydqpToNFo?si=AFjXQa_pko0eYnc4&autoplay=1&mute=1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"

        style={{ width: '100%', height: '180%', position: 'absolute', top: -100, left: 0, zIndex: -1 }}
      ></iframe>
      <div className="section-content">
        {/* Your content inside the #start section */}
        <h1>SNOWBOARD</h1>
        <Home />
      </div>
    </section>

    <section id="info" className="custom-section">
      <div className="section-content">
        <div className="info-content">
          <div className="infoinfo-block">

            <a className="snowboardsKapa" href="https://www.pexels.com/sv-se/foto/sno-vinter-is-urban-376697/" target="_blank" rel="noopener noreferrer">
              <img src={snowboards} alt="pics" className='kaPA' />
            </a>


          </div>
          <div className="infotwo-block">
            <h4>Info about this page</h4>
            <p> Background</p>
            <p>FYI:</p>
            <div className='woop'>
              <p>Pictures are taken from </p>
              <p>https://www.pexels.com/</p>
              <p>Background Video is taken from:</p>
              <p className='woop-text'>
                <a href="https://www.youtube.com/watch?v=mBydqpToNFo">
                  ( BAHAMAS. A Snowboard Film By Beyond Medals.
                  ) </a>
              </p>

            </div>

          </div>
        </div>
      </div>
    </section>

    <section id="riderone" className="custom-section">
      <div className="section-content">
        <div className="riderone-content">
          <div className="riderone-block">
            <div className='RiderOneDiv'>
              <h2>Rider, Who is this</h2>
              <p>Name: Maria</p>
              <p>Age: 19</p>
              <p>From: US</p>

            </div>
          </div>
          <div className="rideronetwo-block">
            <div className="profile-picture-container">
              <img
                src="https://images.pexels.com/photos/7165176/pexels-photo-7165176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Profile"
                className="profile-picture"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="ridertwo" className="custom-section">
      <div className="section-content">
        <div className="ridertwo-content">
          <div className="ridertwo-block">
            <div className="profiletwo-picture-container">
              <img src={onemalesnowboard} alt="pics" className="profiletwo-picture" />
            </div>
          </div>
          <div className="ridertwotwo-block">

            <div className='RiderTwoDiv'>
              <h2>Rider, Who is this</h2>
              <p>Name: Travis</p>
              <p>Age: 34</p>
              <p>Country: Sweden</p>

            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="about" className="custom-section">
      <div className="section-content">
        <div className="about-content">
          <div className="aboutone-block">
            <div className='aboutMountain'>
              <h2>About</h2>
              <p>Hometown: Stockholm</p>
              <p>Country: Sweden</p>

            </div>
          </div>
          <div className="abouttwo-block">
            <div className='mountain-roler'>

              <img src={mountain} alt="pics" className="mountain" />

            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="abouttwo" className="custom-section">
      <div className="section-content">
        <div className="about-content-vid">
          <div className="abouttwothree-block">
            <div className='aboutMountain'>
              <h2>Learn more about the mountain</h2>
              <p>Raise awareness about avalanches</p>
              <p>Watch the video to learn more</p>
              <p>
                <a href="https://vimeo.com/144545554">Video: Know Before You Go</a>
              </p>
              <p><a href="https://vimeo.com/utahavalanchecenter">From: Utah Avalanche Center</a></p>
            </div>
          </div>
          <div className="aboutonethree-block">
            <div className='mountain-rolertwo'>

              <iframe src="https://player.vimeo.com/video/144545554?h=367734e3fe&color=ffffff"
                title='vimeo player'
                width="800" height="400"
                allow="autoplay; fullscreen; "
                className='mountaintwo'
                frameBorder="0"
              ></iframe>

            </div>
          </div>
        </div>
      </div>
    </section >
    <section id="contact" className="custom-section">
      <div className="section-content">
        <h2>Contact</h2>
        <SocialMedia />
      </div>
    </section>

    <section id="footer" className="custom-section">
      <div className="section-content">
        <Footer />
      </div>
    </section>
  </div >
);

export default App;
