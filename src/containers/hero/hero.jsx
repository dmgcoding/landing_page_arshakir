import React from 'react';
import { tick, hero_img, bg_curve } from './imports';

import './hero.css';

const Hero = () => {
  return (
    <div id='hero' className="lp__hero">
      <div className="lp__hero-bgpattern">
        <img src={bg_curve} alt="" />
      </div>
      <div className="lp__hero__box">
        <div className="lp__hero-box__container">
          <div className="lp__hero-box__container-content">
            <p className="lp__hero-box__container-content-subheading">Product Growth Solution in Single Platform.</p>
            <p className="lp__hero-box__container-content-heading">
            Managing business payments has never been easier
            </p>
            <p className='lp__hero-box__container-content-para'>Never at water me might. On formed merits hunted unable merely by mr whence or. Possession the unpleasing simplicity her uncommonly.</p>
            <div className="lp__hero-box__container-content_form">
              <div className="lp__hero-box__container-content__form-input">
                <p>Register using email address</p>
                <input id="hero_form_input" type="text" placeholder='dmgshehan123@gmail.com' />
              </div>
              <button className="lp__hero-box__container-content__form-button">Submit</button>
            </div>
            <div className='lp__hero-box__container-content__tick'>
              <div className="lp__hero-box__container-content__tick-tick">
                <img src={tick} alt="tick" />
                Free Register
              </div>
              <div className="lp__hero-box__container-content__tick-tick">
                <img src={tick} alt="tick" />
                Great Service
              </div>
            </div>
          </div>
          <div className="lp__hero-box__container-img">
            <img src={hero_img} alt="hero img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero