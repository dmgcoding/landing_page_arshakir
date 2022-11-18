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
      <svg width="0" height="0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id='whu_bg_clip' clipPathUnits="objectBoundingBox" transform='scale(0.00062,0.00089)'>
        <path d="M1532.68 23.4947C665.186 159 38.6865 10.0053 -116.314 0.5L-178.316 59.4944C-419.483 219.328 -963.714 600.995 -251.314 920.995C461.086 1240.99 1605.69 1102.49 1714.69 938.995L1925.19 738.995C1979.69 422.828 2009.18 -50.9357 1532.68 23.4947Z" fill="#F5F8FF"/>
          </clipPath></defs>
      </svg>
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