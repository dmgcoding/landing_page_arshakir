import React from 'react';
import './pmApp.css';
import applestore from './../../assets/images/icons/apple-logo.png';
import playstore from './../../assets/images/icons/playstore-logo.png';


const PMApp = () => {
  return (
    <div className="lp__app">
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