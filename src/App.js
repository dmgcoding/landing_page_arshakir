import './App.css';
import {Blog, Brands, CTO, Hero, Nav, PMApp, Team, Testimonials, WhatWeOffer, WhyHireUs} from './containers';

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
      <Testimonials />
      <PMApp />
      <Blog />
    </div>
  );
}

export default App;
