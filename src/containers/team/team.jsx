import React from 'react';
import './team.css';
import devProcess from './../../assets/images/dev-process.png';

const Team = () => {
  return (
    <div id="team" className="lp__team">
      <div className="lp__team-bg">
        <img src={devProcess} alt="graph" />
      </div>
      <div className="lp__team-container">
        <div className="lp__team-container__text">
          <p className="lp__team-container__text-subheading">Stockie Operation Across the world</p>
          <p className="lp__team-container__text-heading">We have best team
and best process</p>
          <p className="lp__team-container__text-para">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy.</p>
          <button className="lp__team-container__text-button">Get Started</button>
        </div>
        <div className="lp__team-container__empty"></div>
      </div>
    </div>
  )
}

export default Team