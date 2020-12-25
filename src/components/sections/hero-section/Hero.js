

import './Hero.css'
import Icons from '../../social-media-icon/Icons'

const HeroSection = () => (
  <div className="hero">
    {/* hero content */}
    <div className="hero__content">
      <h1 className="heading-1">H! I am Ezekiel</h1>
      <div className="blur"></div>

      <p className="hero-text">
        This website is Designed in adobe xd and developed in react js
      </p>
  <Icons/>
    </div>

    <div className="hero-overlay"></div>
  </div>
);

export default HeroSection;