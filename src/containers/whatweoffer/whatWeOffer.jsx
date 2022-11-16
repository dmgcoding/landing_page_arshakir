import React from 'react';
import './whatWeOffer.css';
import star from './../../assets/images/icons/star-icon.png';
import medal from './../../assets/images/icons/medal-icon.png';
import bulb from './../../assets/images/icons/bulb-icon.png';

const WhatWeOffer = () => {
  return (
    <div className="lp__wwo">
      <div className="lp__wwo__container">
        <div className="lp__wwo__container-box1">
          <p className="lp__wwo__container-box1__text">
          Among leave law built now.
          </p>
          <div className="lp__wwo__container-box1__iconbox">
            <div className="lp__wwo__container-box1__iconbox-icon">
              <img src={star} alt="" />
            </div>
            <p>Village did remov enjoyed</p>
          </div>
          <div className="lp__wwo__container-box1__iconbox">
            <div className="lp__wwo__container-box1__iconbox-icon">
              <img src={medal} alt="" />
            </div>
            <p>Nay likely  length sooner</p>
          </div>
          <div className="lp__wwo__container-box1__iconbox">
            <div className="lp__wwo__container-box1__iconbox-icon">
              <img src={bulb} alt="" />
            </div>
            <p>Expense windows adapted </p>
          </div>
        </div>
        <div className="lp__wwo__container-box2">
          <div className="lp__wwo__container-box2__box">
            <p className="lp__wwo__container-box2__box-heading">
              Offend belong promote provision</p>
            <p className="lp__wwo__container-box2__box-para">
            Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. 
            </p>
            <div className="lp__wwo__container-box2__box-button">
              <button>Read More</button>
            </div>
          </div>
          <div className="lp__wwo__container-box2__box">
            <p className="lp__wwo__container-box2__box-heading">
            Consulted ourselves it blessing welcom
            </p>
            <p className="lp__wwo__container-box2__box-para">
            The expense windows adapted sir. Wrong widen drawn ample eat off doors money.
            </p>
            <div className="lp__wwo__container-box2__box-button">
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatWeOffer