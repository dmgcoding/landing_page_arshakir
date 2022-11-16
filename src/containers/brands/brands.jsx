import React from 'react';
import './brands.css';
import {openzopply, oracle, morpheus,samsung,monday, segment, protone} from './imports';

const allBrands = [
  {
    alt: "openzopply",
    img: openzopply
  },
  {
    alt: "oracle",
    img: oracle
  },{
    alt: "morpheus",
    img: morpheus
  },{
    alt: "samsung",
    img: samsung
  },{
    alt: "monday",
    img: monday
  },{
    alt: "segment",
    img: segment
  },{
    alt: "protone",
    img: protone
  },
];

const Brands = () => {
  return (
    <div className="lp__brands">
      <div className="lp__brands__container">
        <p>Over 32k+ software  businesses growing with AR Shakir</p>
        <div className="lp__brands__container-brands">
          {allBrands.map(e=>
          (<img src={e.img} className="lp__brands__container-brands-brand" alt={e.alt} />)
          )}
        </div>
      </div>
    </div>
  )
}

export default Brands;
