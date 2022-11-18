import React from 'react';
import './subscribe.css';

const Subscribe = () => {
  return (
    <div className="lp__subscribe">
      <div className="lp__subscribe__container">
        <div className="lp__subscribe__container-content">
          <p className="lp__subscribe__container-content-title">
          Why Choose Us
          </p>
          <p className="lp__subscribe__container-content-heading">
          Track your crytpo portfolio on the best way possible
          </p>
          <p className="lp__subscribe__container-content-para">
          Mean if he they been no hold mr. Is at much do made. Latter person am secure of estate genius at.
          </p>
        </div>
        <div className="lp__subscribe__container-form">
          <input type="text" placeholder='Email Address'/>
          <input type="password" placeholder='Password'/>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe