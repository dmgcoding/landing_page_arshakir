import React from 'react';
import './testimonials.css';

import {quote,ratingstar,authorlogo,tImgPattern1,tImgPattern2,tImg} from './imports';

const Testimonials = () => {
  return (
    <div className="lp__testimonials">
      <div className="lp__testimonials__container">
        <div className="lp__testimonials__container-titles">
          <p className="lp__testimonials__container-titles-title">
            Testimonials
          </p>
          <p className="lp__testimonials__container-titles-heading">
          Check what our clients are saying
          </p>
        </div>
        <div className="lp__testimonials__container-tbox">
          <div className="lp__testimonials__container-tbox__imgbox">
            <img className='lp__testimonials__container-tbox__imgbox-p1' src={tImgPattern1} alt="" />
            <div className="lp__testimonials__container-tbox__imgbox-img">
            <img src={tImg} alt="" />
            </div>
            <img className='lp__testimonials__container-tbox__imgbox-p2' src={tImgPattern2} alt="person" />
          </div>
          <div className="lp__testimonials__container-tbox__testibox">
            <img src={quote} alt="" className="lp__testimonials__container-tbox__testibox-quote" />
            <div className="lp__testimonials__container-tbox__testibox-ratings">
              <img src={ratingstar} alt="" />
              <img src={ratingstar} alt="" />
              <img src={ratingstar} alt="" />
              <img src={ratingstar} alt="" />
              <img src={ratingstar} alt="" />
            </div>
            <p className="lp__testimonials__container-tbox__testibox-testimonial">
            Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now.
            </p>
            <div className="lp__testimonials__container-tbox__testibox-author">
              <div>
                <p className="lp__testimonials__container-tbox__testibox-author-name">AR Shakir</p>
                <p className="lp__testimonials__container-tbox__testibox-author-profession">
                CEO GetNextDesign
                </p>
              </div>
              <div className="lp__testimonials__container-tbox__testibox-author-logo">
                <img src={authorlogo} alt="author logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials