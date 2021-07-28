// Core
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

// Images
import img1 from './../../img/characters/9@2x.png';
import img2 from './../../img/characters/8@2x.png';

// Reandering
class Select_type extends Component {
  render() {
    return (
        <div>
        <section className="good-wishes">
          <div className="cross-border main-bgi py-5 d-flex justify-content-center">
            <div className="cross-content p-5">
              <div className="container text-center">
                <h5 className="text-warning fw-bold mt-5"># نتمني لك النجاح والتوفيق</h5>
                <h1 className="sec-title text-white fw-bold">اشتراك</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="signup sec-bg  my-5">
          <div className="container text-right mt-5 py-5">
            <div className="row justify-content-center">
              <div className="col-md-5 text-center p-3">
                <div className="shadow mb-5 bg-white rounded p-3">
                  <img src={img2} alt="" />
                  <h4 className="fw-bold main-c" >اشتراك الطالب</h4>
                  <p className="fw-bold">
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى،
                  </p>

                  <Link to={{
                    pathname:'/signup',
                    state: { api:'https://moroj-apis.herokuapp.com/api/user/registration/signup'}
                  }} className="btn main-bgc text-white fw-bold">اشتراك</Link>
                </div>
              </div>
              <div className="col-md-5 text-center p-3">
                <div className="shadow mb-5 bg-white rounded p-3">
                  <img src={img1} alt="" />
                  <h4 className="fw-bold main-c">اشتراك المعلم</h4>
                  <p className="fw-bold">
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى،
                  </p>

                  <Link to={{
                    pathname:'/signup',
                    state: { api:'https://moroj-apis.herokuapp.com/api/teacher/registration/signup'}
                  }} className="btn main-bgc text-white fw-bold" style={{background: "#5cc133"}}>اشتراك</Link>

                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
    );
  }
}

export default Select_type;
