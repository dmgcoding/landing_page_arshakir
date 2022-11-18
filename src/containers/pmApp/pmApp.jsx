import React from 'react';
import './pmApp.css';
import applestore from './../../assets/images/icons/apple-logo.png';
import playstore from './../../assets/images/icons/playstore-logo.png';


const PMApp = () => {
  return (
    <div id='pmapp' className="lp__app">
      <svg width="0" height="0" viewBox="0 0 1200 690" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
        <clipPath id="pmAppClip" clipPathUnits="objectBoundingBox" transform="scale(0.000699, 0.0014)">
          <path d="M1440 281.43V0L718.5 81L-3 0V281.43C-3 359.089 44.2608 428.931 116.351 457.807L711.063 696.021C715.837 697.933 721.163 697.933 725.937 696.021L1320.65 457.807C1392.74 428.931 1440 359.089 1440 281.43Z" />
        </clipPath>
        </defs>
      </svg>
      <div className="lp__app__container">
        <p className="lp__app__container-title">
        Project Management App
        </p>
        <p className="lp__app__container-heading">
        Download our app and start your free trail to get started today!
        </p>
        <p className="lp__app__container-para">
        End-to-end payments and financial management in a single solution.
        </p>
        <div className="lp__app__container-buttons">
          <button className="lp__app__container-buttons-applestore">
            <img src={applestore} alt="" />
            Applestore
          </button>
          <button className="lp__app__container-buttons-playstore">
            <img src={playstore} alt="" />
            Playstore
          </button>
        </div>
      </div>
    </div>
  )
}

export default PMApp