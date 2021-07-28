// Core
import React from 'react';

// Styels
import './Services.css';

const Searvics = () => {
  return (
    <section className="our-services py-3">
      <div className="cross-border main-bgi py-2 d-flex justify-content-center">
        <div className="cross-content p-5">
          <div className="container text-right">
            <h5 className="text-warning fw-bold pt-5"># افضل الخدمات مقدمة لكم</h5>
            <h1 className="sec-title text-white fw-bold">خدماتنا</h1>
            <div className="card-container pt-5 d-flex justify-content-between">
              <div className="card-core rounded">
                <div className="c f-c main-bgc rounded-circle shadow  mb-5 bg-whit"></div>
                <div className="c t-c therd-bgc rounded-circle shadow  mb-5 bg-whit "></div>
                <div className="card-content text-center w-100 p-3 pt-5 bg-white position-absolute">
                  <h4 className="my-3 main-c fw-bold">حصص جماعية</h4>
                  <p className="card-desc fw-normal">
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
                  </p>
                </div>
              </div>
              <div className="card-core rounded">
                <div className="c f-c main-bgc rounded-circle shadow  mb-5 bg-whit"></div>
                <div className="c t-c therd-bgc rounded-circle shadow  mb-5 bg-whit"></div>
                <div className="card-content text-center w-100 p-3 pt-5 bg-white position-absolute">
                  <h4 className="my-3 main-c fw-bold">مساعدة فورية</h4>
                  <p className="card-desc">
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
                  </p>
                </div>
              </div>
              <div className="card-core rounded">
                <div className="c f-c main-bgc rounded-circle shadow  mb-5 bg-whit"></div>
                <div className="c t-c therd-bgc rounded-circle shadow  mb-5 bg-whit"></div>
                <div className="card-content text-center w-100 p-3 pt-5 bg-white position-absolute">
                  <h4 className="my-3 main-c fw-bold">متابعة فورية</h4>
                  <p className="card-desc">
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gap"></div>
    </section>
  );
}

export default Searvics;
