import React from 'react';
import '../App.css';
import HeroImage from '../assets/images/main.png';
import Bug from '../assets/images/bug.png';

const Main = () => {
  return (
    <section className="App">
        <a href="http://www.citygate.tv"  target="_blank rel=noopener">
          <img className="Bug" src={Bug} alt=""/>
        </a>
        <img className="HeroImg" src={HeroImage} alt="Christmas Unwrapped Logo"></img>

        <div className="callToAction">
          <a className="btn mainLink1" target="_blank rel=noopener" href="https://citygatechurch.wufoo.com/forms/x1vdk9hs01soldw/">Get Tickets</a>
        </div>
    </section>
  );
}

export default Main;
