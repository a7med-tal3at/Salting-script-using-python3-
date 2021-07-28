// Core
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { postRequest } from '../../Api/Users';

// Images
import img from './../../img/characters/8@2x.png';

// Assets

// Reandering
const Signin = () => {
  // componentDidMount() {
  //   document.querySelectorAll("input").forEach( inp => handelInput(inp) );

  //   function handelInput(inp) {
  //       inp.onblur =  function(){
  //         this.classList.remove('active');
  //         this.parentNode.childNodes[0].classList.remove("main-c");
  //       }

  //       inp.onfocus = function(){
  //         this.classList.add('active');
  //         this.parentNode.childNodes[0].classList.add("main-c");
  //       }
  //   }

  // }
  // render() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [api, setApi] = useState('https://moroj-apis.herokuapp.com/api/user/registration/login');


  function handelLogIn(e) {
    e.preventDefault();
    let item = {email, password}
    postRequest(item, api, '');
  }

  return (
      <>
        <section className="good-wishes">
          <div className="cross-border main-bgi py-5 d-flex justify-content-center">
            <div className="cross-content p-5">
              <div className="container text-center">
                <h5 className="text-warning fw-bold mt-5"># نتمني لك النجاح والتوفيق</h5>
                <h1 className="sec-title text-white fw-bold">تسجيل الدخول</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="signin sec-bg mb-5">
        <div className="container text-right mt-5 py-5">
          <div className="row">
            <div className="col-md pt-5">
              <form className="text-center" method="post" onSubmit={(e)=> handelLogIn(e)}>
                <div className="form-group">
                  <div className="btn-cont w-100 d-flex text-center mb-5 justify-content-center">
                    <button onClick={ ()=> { setApi('https://moroj-apis.herokuapp.com/api/user/registration/login') } } className="btn px-5 ml-3 main-bgc text-white">طالب</button>
                    <button onClick={ ()=> { setApi('https://moroj-apis.herokuapp.com/api/teacher/registration/login') } } className="btn px-5 main-bgc text-white">معلم</button>
                  </div>
                  <div className="position-relative mb-3">
                    <i className="fa fa-user position-absolute"></i>
                    <input onChange={(e)=>{ setEmail(e.target.value) }} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="اسم المستخدم او رقم الجوال" />
                  </div>
                  <div className="position-relative">
                    <i className="fa fa-lock position-absolute"></i>
                    <input onChange={(e)=>{ setPassword(e.target.value) }} type="password" className="form-control" id="exampleInputPassword1" placeholder="كلمة المرور" />
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                      <label className="form-check-label pr-3" htmlFor="exampleCheck1">تذكرني</label>
                    </div>
                    <a href="#" className="text-secondary fw-bold">نسيت كلمة المرور</a>
                  </div>
                    <button className="btn main-bgc my-3 text-white">تسجيل الدخول</button>
                    <div className="using-media text-center">
                      <label htmlFor="">اوقم بالتسجيل من</label>

                      { /*<!-- Img1 -->*/}
                      { /*<!-- Img2 -->*/}
                    </div>
                    <p>ليس لديك حساب!!!<Link to="/step_one" className="btn-link fw-bold">انشئ حساب الان</Link></p>
                </div>
              </form>
            </div>
            <div className="col-md">
              <img className="w-100" src={img} alt="" />
            </div>
          </div>
        </div>
      </section>
      </>
  );
  // }
}

export default Signin;
