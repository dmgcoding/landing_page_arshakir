import './App.css';
import {Brands, CTO, Hero, Nav, Team, WhatWeOffer, WhyHireUs} from './containers';

function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <Brands />
      <Team />
      <CTO />
      <WhyHireUs />
      <WhatWeOffer />
    </div>
  );
}

export default App;
