import React from 'react';
import '../App.css';

const Locations = () => {
  return (
    <div className="Locations">
      <div className="details">
        <h1>Times and Locations</h1>
        <h3>Saturday, December 7th at 3pm</h3>
        <h4>CityGate Church Lebanon</h4>
        <p>1004 Columbus Avenue. Lebanon, Ohio 46036</p>
      </div>
      
      <div className="callToAction">
          <a className="btn mainLink1" target="_blank rel=noopener" href="https://citygatechurch.wufoo.com/forms/x1vdk9hs01soldw/">Get Tickets</a>
      </div>
    </div>
  );
}

export default Locations;
