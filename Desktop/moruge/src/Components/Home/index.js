// Core
import React from 'react';

// Styles
import './Home.css';

// Images
import img from "./../../img/characters/5.png";

const Home = () => {
  return (
    <section className="home main-bgi pt-3">
      <div className="container position-relative" style={{zIndex: "30!important"}}>
        <div className="home-content d-flex text-right">
          <div className="text-content pt-5 w-75">
            <h4 className="therd-c fw-bold"># افضل منصة تعليم</h4>
            <div className="gap">
              <h1 className="text-white w-100 fw-bold position-absolute">مرحبا بك في منصة مروج التعليمية</h1>
            </div>
            <div className="gap"></div>
            <p className="home-desc fw-normal text-light ">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
            </p>
            <button className="btn therd-bgc fw-bold">اشترك الان</button>
          </div>
          <div className="home-img">
            <img src={img} alt="Welcome img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
