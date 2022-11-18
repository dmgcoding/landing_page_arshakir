import React from 'react';
import './footer.css';
import { linkedin,messenger,twitter,meta } from './imports';

const Footer = () => {
  return (
    <div className="lp__footer">
      <div className="lp__footer__container">
        <div className="lp__footer__container-menues">
          <div className="lp__footer__container-menues__socials">
            <p className="lp__footer__container-menues-title">
              Ar Shakir
            </p>
            <p className="lp__footer__container-menues-para">
            Simple innate summer fat appear basket his desire joy.
            </p>
            <div className="lp__footer__container-menues__socials-iconbox">
              <img src={linkedin} alt="fb" />
              <img src={messenger} alt="fb" />
              <img src={twitter} alt="fb" />
              <img src={meta} alt="fb" />
            </div>
          </div>
          <div className="lp__footer__container-menues__company">
            <p className="lp__footer__container-menues-title">
              Company
            </p>
            <ul className='lp__footer-g-listitem'>
              <li>About us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="lp__footer__container-menues__resources">
            <p className="lp__footer__container-menues-title">
              Resources
            </p>
            <ul className='lp__footer-g-listitem'>
              <li>Templates</li>
              <li>Tutorials</li>
              <li>Free Resources</li>
              <li>Contract Templates</li>
            </ul>
          </div>
          <div className="lp__footer__container-menues__newsletter">
            <p className="lp__footer__container-menues-title">
              Join our newsletter
            </p>
            <div className="lp__footer__container-menues__newsletter-inputbox">
              <input type="text" placeholder='Your email address'/>
              <button>Subscribe</button>
            </div>
            <p className="lp__footer__container-menues-para">
            *  Will send you weekly updates for your better
finance management.
            </p>
          </div>
        </div>
        <div className="lp__footer__container-hr"></div>
        <div className="lp__footer__container-credits">
          <p>Copyright @ AR Shakir 2022. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer