import React from 'react';
import './whyHireUs.css';
import {sunIcon, cupIcon, flowerIcon, readmoreIcon} from './imports';

const boxes = [
  {
    icon: cupIcon,
    title: "Offending belonging",
    para: "Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as."
  },
  {
    icon: flowerIcon,
    title: "Offending belonging",
    para: "Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as."
  },
  {
    icon: sunIcon,
    title: "Offending belonging",
    para: "Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as."
  },
];

const WhyHireUs = () => {
  return (
    <div className="lp__whu">
      <div className="lp__whu__title">
        <p className="lp__whu__title-heading">We help your business grow faster.</p>
        <p className="lp__whu__title-subheading">Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient.</p>
      </div>
      <div className="lp__whu__iconboxes">
        {boxes.map(e=>(
          <div className="lp__whu__iconboxes-box">
            <img src={e.icon} alt="" />
            <p className="lp__whu__iconboxes-box-heading">{e.title}</p>
            <p className="lp__whu__iconboxes-box-para">{e.para}</p>
            <div className="lp__whu__iconboxes-box-readmore">
              <p>Read More</p>
              <img src={readmoreIcon} alt="icon" />
            </div>
        </div>
        ))}
      </div>
      <div className="lp__whu__button">
        <button>More about platform</button>
      </div>
    </div>
  )
}

export default WhyHireUs