// Core
import React from 'react';

// Styles
import './About.css';

// Images
import img from './../../img/characters/7@2x.png';

const About = () => {
  return (
    <section className="about-us py-5 sec-bg">
      <div className="container pt-5">
        <div className="row pt-5">
          <div className="col-md-5">
            <img src={img} className="w-100 h-100" alt="About us image" />
          </div>
          <div className="col-md-7 text-right">
            <h5># الافضل بالشرق الاوسط</h5>
            <h1 className="sec-title">من نحن</h1>
            <p className="about-desc ">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
            </p>
            <button className="main-bgc btn text-white">اشترك الان</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
