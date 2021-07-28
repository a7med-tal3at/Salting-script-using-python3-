// Core
import React from 'react';

// Styles
import "./Features.css";

const Features = () => {
  return (
    <section className="fetures">
        <div className="container p-5">
          <h5 className="text-center fw-bold"># لماذا عليك الاشتراك معنا</h5>
          <h1 className="sec-title w-50 mx-auto mb-5 text-center">مميزات منصة مروج</h1>
          <div className="fet-cards d-flex justify-content-between pt-5">
            <div className="fet-card position-relative">
              <div className="top-block main-bgc text-center text-white position-absolute shadow rounded">
                <i className="fa fa-clock-o"></i>
              </div>
              <div className="card-content text-center shadow bg-white rounded p-3 pt-5 bg-white ">
                <h4 className="my-3 fw-bold main-c">مرونة التوقيت</h4>
                <p className="card-desc">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
                </p>
              </div>
            </div>
            <div className="fet-card position-relative">
              <div className="top-block  main-bgc text-center text-white position-absolute shadow rounded">
                <i className="fa fa-usd"></i>
              </div>
              <div className="card-content text-center shadow bg-white rounded p-3 pt-5 bg-white ">
                <h4 className="my-3 fw-bold main-c">اسعار مقبولة</h4>
                <p className="card-desc">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
                </p>
              </div>
            </div>
            <div className="fet-card position-relative">
              <div className="top-block  main-bgc text-center text-white position-absolute shadow rounded">
                <i className="fa fa-lock"></i>
              </div>
              <div className="card-content text-center shadow bg-white rounded p-3 pt-5 bg-white ">
                <h4 className="my-3 fw-bold main-c">تجربة امنة</h4>
                <p className="card-desc">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
                </p>
              </div>
            </div>
            <div className="fet-card position-relative">
              <div className="top-block  main-bgc text-center text-white position-absolute shadow rounded">
                <i className="fa fa-television"></i>
              </div>
              <div className="card-content text-center shadow bg-white rounded p-3 pt-5 bg-white ">
                <h4 className="my-3 fw-bold main-c">سبورة ذكية</h4>
                <p className="card-desc">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Features;
