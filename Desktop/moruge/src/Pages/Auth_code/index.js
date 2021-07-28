// Core
import React, { Component } from "react";
import { Link } from "react-router-dom";

// Styles
import "./AuthCode.css";

// Rendring
class AuthCode extends Component {
  render() {
    return (
      <>
        <section className="good-wishes">
          <div className="cross-border main-bgi py-5 d-flex justify-content-center">
            <div className="cross-content p-5">
              <div className="container text-center">
                <h5 className="text-warning fw-bold mt-5"># اكمال البيانات الشخصية</h5>
                <h1 className="sec-title text-white fw-bold">اكمال تسجيل حسابك الشخصي</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="signin sec-bg mb-5">
          <div className="container text-center mt-5 py-5">
            <h4 className="therd-c fw-bold pt-5"># تأكيد البيانات الشخصية</h4>
            <h1 className="sec-title text-center mx-auto center-after fw-bold"> تأكيد رقم الهاتف</h1>
            <p className="fw-normal">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
            </p>
            <div className="code mx-auto my-5 d-flex justify-content-between">
              <input type="text" className="main-bgc text-center p-3 rounded text-white fw-bold" />
              <input type="text" className="main-bgc text-center p-3 rounded text-white fw-bold" />
              <input type="text" className="main-bgc text-center p-3 rounded text-white fw-bold" />
              <input type="text" className="main-bgc text-center p-3 rounded text-white fw-bold" />
            </div>
            <p className="fw-bold text-center mb-5">لم يصلك رسالة تأكيد...!!!<a href="#" className="main-c">ارسال مرة اخري</a></p>
            <Link to="/" className="btn main-bgc text-white fw-bold">تأكيد ومتابعة</Link>
          </div>
        </section>
      </>
    );
  }
}

export default AuthCode;
