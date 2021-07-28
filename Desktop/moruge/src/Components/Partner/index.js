// Core
import React from 'react';

// Styles
import "./Partner.css";

// Images 
import amara from '../../img/parteners/amara.png';
import asgardia from '../../img/parteners/asgardia.png';
import earth from '../../img/parteners/earth-2.0.png';
import fox_hub from '../../img/parteners/fox-hub.png';
import hexa from '../../img/parteners/hexa.png';

const Partner = () => {
  return (
    <section className="our-part main-bgi">
      <div className="cross-border py-5 d-flex bg-white justify-content-center">
        <div className="p-5" style={{transform: " rotate(5deg)", width: "80%"}} >
          <div className="container text-right">
              <h5 className="text-center fw-bold"># فخورون بكم</h5>
              <h1 className="sec-title w-25 mx-auto">شركاء النجاح</h1>
              <div className="sponsers d-flex justify-content-between">
                <img src={amara} alt="" />
                <img src={asgardia} alt="" />
                <img src={earth} alt="" />
                <img src={fox_hub} alt="" />
                <img src={hexa} alt="" />
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partner;
