import React from 'react';
import MainSection from './components/Main';
import Details from './components/Details';
import Locations from './components/Locations';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <MainSection></MainSection>
      <Details></Details>
      <Locations></Locations> 
      <Footer></Footer>
    </div>
  );
}

export default App;
