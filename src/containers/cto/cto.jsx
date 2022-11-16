import React from 'react';
import './cto.css';
import bannerImg from '../../assets/images/get-started-banner.png';

const CTO = () => {
  return (
    <div className="lp__cto">
      <div className="lp__cto__container">
        <div className="lp__cto__container__banner" style={{backgroundImage:`url(${bannerImg}) `}}>
          <div className="lp__cto__container__banner-overlay"></div>
          <div className="lp__cto__container__banner__content">
            <p className="lp__cto__container__banner__content-heading">
            Push your product to next level.
            </p>
            <p className="lp__cto__container__banner__content-para">
              End-to-end payments and financial management in a single solution. Meet the right platform to help realize.
            </p>
            <button className="lp__cto__container__banner__content-button">
              Get Started
            </button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default CTO