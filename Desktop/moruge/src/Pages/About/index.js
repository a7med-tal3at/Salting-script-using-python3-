// Core
import React, { Component } from "react";

// Styles
import "./About.css";

// Images
import img from "./../../img/characters/7@2x.png";

// Reandering
class About extends Component {
  render() {
    return (
      <>
        <section className="who-we-are">
          <div className="cross-border main-bgi py-5 d-flex justify-content-center">
            <div className="cross-content p-5">
              <div className="container text-center">
                <h5 className="text-warning fw-bold mt-5"># من نحن</h5>
                <h1 className="sec-title text-white fw-bold">عن منصة مروج التعليمية</h1>
              </div>
            </div>
          </div>
        </section>
        
        <section className="the-best sec-bg mb-5">
          <div className="container text-right mt-5 py-5">
            <div className="row">
              <div className="col">
                <h5 className="fw-bold"># الافضل بالشرق الاوسط</h5>
                <h1 className="sec-title  fw-bold"> من نحن</h1>
                <p className="fw-normal">
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                </p>
                <p className="fw-normal">
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                </p>
                <button className="btn btn-warning">اشترك الان</button>
              </div>
              <div className="col">
                <img src={img} alt="" />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default About;
