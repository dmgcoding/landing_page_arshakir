import './App.css';
import {Blog, Brands, CTO, Footer, Hero, Nav, PMApp, Subscribe, Team, Testimonials, WhatWeOffer, WhyHireUs} from './containers';

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
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
