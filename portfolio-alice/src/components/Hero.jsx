import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero-image.png';
import star1 from '../assets/star-1.png';
import star2 from '../assets/star-2.png';

const Hero = () => {
  return (
    <section className="hero-container">
      <img
        src={star1}
        alt=""
        aria-hidden="true"
        className="hero-star star-1"
      />
      <img
        src={star2}
        alt=""
        aria-hidden="true"
        className="hero-star star-2"
      />

      {/* Imagem Central */}
      <img 
        src={heroImage} 
        alt="Alice Portfolio - Full Stack Developer" 
        className="hero-img"
      />
    </section>
  );
};

export default Hero;