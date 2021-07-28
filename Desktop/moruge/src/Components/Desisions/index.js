// Core
import React from 'react';

// Styles
import "./Desisions.css";

// Imgages
import img from "./../../img/characters/8@2x.png";

const Desisions = () => {
  return (
    <>
      <section className="des">
        <div className="container">
          <div className="main w-75 mx-auto">
            <div className="row">
              <div className="col-md-4">
                <img src={img} alt="" />
              </div>
              <div className="col-md-5 text-right d-flex justify-content-center flex-column">
                <h5 className="text-warning fw-bold">هل انت شغوف بالتعلم</h5>
                <p className="text-white" style={{fontSize: "12px"}}>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
                </p>
              </div>
              <div className="col-md-3 d-flex align-items-center">
                <button className="btn btn-warning">اشترك الان</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="gap mt-5"></div>
      <div className="gap"></div>
    </>
  );
}

export default Desisions;
