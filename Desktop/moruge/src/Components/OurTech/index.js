// Core
import React from 'react';

// Style
import './OurTech.css';

// Images
import img from "./../../img/characters/8@2x.png";

const OurTech = () => {
  return (
    <section className="our-tech main-bgi pt-5">
      <div className="container pb-5">
        <div className="row">
          <div className="col-md-6 text-right pt-5">
            <h4 className="fw-bold therd-c my-3"># احدث تكنولوجيا التعليم</h4>
            <h3 className="text-white fw-bold w-100">فصول افتراضية بادوات تفاعلية</h3>
            <p className="text-light pt-3">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
            </p>
            <button className="btn therd-bgc fw-bold">اشترك الان</button>
          </div>
          <div className="col-md-6">
              <div>
                <img src={img} className="w-75 h-75" alt="About us image" />
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTech;
