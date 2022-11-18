import React from 'react';
import { logo } from '.';

import './nav.css'

const Nav = () => {
  return (
    <div id='nav' className="lp__nav__container">
      <nav className="lp__nav__container__box">
        <img src={logo} alt="logo" className="lp__nav__container__box-logo" />
        <div className="lp__nav__container__box-menu">
          <ul>
            <a href="#pmapp"><li>Product</li></a>
            <a href="#team"><li>Template</li></a>
            <a href="#blog"><li>Blog</li></a>
            <a href="#subscribe"><li>Pricing</li></a>
          </ul>
        </div>
        <div className="lp__nav__container__box-buttons">
          <a href="" className="lp__nav__container__box-buttons__btn1">Sign in</a>
          <a href="" className="lp__nav__container__box-buttons__btn2">Start Free</a>
        </div>
      </nav>
    </div>
  )
}

export default Nav