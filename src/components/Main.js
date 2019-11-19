import React from 'react';
import '../App.css';
import HeroImage from '../assets/images/kidsChristmas.png';
import Bug from '../assets/images/bug.png';

const Main = () => {
  return (
    <section className="App">
        <a href="http://www.citygate.tv"  target="_blank rel=noopener">
          <img className="Bug" src={Bug} alt=""/>
        </a>
        <img className="HeroImg" src={HeroImage} alt="Christmas Unwrapped Logo"></img>

        <div className="callToAction">
          <p>
            Reserve your FREE seat and a photo with Santa!
            <br/>
            Text <i>"SANTA"</i> to 513-299-0011*
          </p>
        </div>
    </section>
  );
}

export default Main;
