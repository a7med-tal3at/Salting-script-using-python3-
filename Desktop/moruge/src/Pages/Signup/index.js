// Core
import React, { Component, useState } from 'react';
import { useLocation } from "react-router-dom";
import { postRequest } from '../../Api/Users';

// Images
import img from './../../img/characters/8@2x.png';

// Reandering
const Signup = () =>  {
  
  const options = [
    {value: 'الدولة', label: 'الدولة'},
    {value: 'مصر', label: 'مصر'},
    {value: 'عمان', label: 'عمان'},
    {value: 'السعودية', label: 'السعودية'},
    {value: 'الجزائر', label: 'الجزائر'},
  ]
  
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConf] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [cuntCode, setCuntCode] = useState('');
  const [gender, setGender] = useState('');

  function handelSignUp(e, api) {
    
    e.preventDefault();
    // Student Object
    let stdItem = {
      fname,
      lname,
      email,
      password,
      password_confirmation,
      country,
      gender,
      phone
    };

    // Teacher Object
    let name = fname;
    let tecItem = {
      name,
      lname,
      email,
      password,
      password_confirmation,
      // country,
      gender,
      phone
    }

    { 
      api.includes('teacher') ? 
      postRequest(tecItem, api, 'auth_code') :  postRequest(stdItem, api, 'auth_code') 
    }
  }

  const location = useLocation()
  const api = location.state?.api;
  
  return (
      <div>
      <section className="good-wishes">
      <div className="cross-border main-bgi py-5 d-flex justify-content-center">
        <div className="cross-content p-5">
          <div className="container text-center">
            <h5 className="text-warning fw-bold mt-5"># نتمني لك النجاح والتوفيق</h5>
            <h1 className="sec-title text-white fw-bold">تسجيل </h1>
          </div>
        </div>
      </div>
      </section>
        <section className="signin sec-bg mb-5">
          <div className="container text-center mt-5 py-5">
            <h4 className="therd-c fw-bold pt-5"># البيانات الشخصية</h4>
            <h1 className="sec-title text-center mx-auto center-after fw-bold"> قم بادخال البيانات التالية</h1>
            <div className="row">
              <div className="col-md pt-3">
                <form className="text-center" method="post" onSubmit={(e)=>{
                  handelSignUp(e, api)
                }}>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input type="text" onChange={ (e)=>setFName(e.target.value) } className="form-control" placeholder="الاسم الاول" />
                    </div>
                    <div className="form-group col-md-6">
                      <input type="text" onChange={ (e)=>setLName(e.target.value) } className="form-control" placeholder="الاسم الخير" />
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="email" onChange={ (e)=>setEmail(e.target.value) } className="form-control" id="inputEmail4" placeholder=" البريد الاليكتروني" />
                  </div>
                  <div className="form-group">
                    <input type="password" onChange={ (e)=>setPassword(e.target.value) } className="form-control"  placeholder="كلمة المرور" />
                  </div>
                  <div className="form-group">
                    <input type="password" onChange={ (e)=>setPasswordConf(e.target.value) } className="form-control"  placeholder="كلمة المرور" />
                  </div>
                    <div className="form-group">
                    <select value={country} className="form-control" onChange={(e)=>setCountry(e.target.value)}> 
                      {options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                      ))}
                    </select>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-9">
                        <input type="text" value={phone} onChange={ (e)=>setPhone(e.target.value) } className="form-control" placeholder="رقم الهاتف" />
                      </div>
                      <div className="form-group col-md-3">
                        <select id="inputState" className="form-control">
                          <option selected>+20</option>
                          <option>...</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-4">
                        <label className="fw-bold">النوع</label>
                      </div>
                      <div className="form-group col-md-4">
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"  value="mail" onChange={ (e)=>setGender(e.target.value) } />
                          <label className="form-check-label pr-3" htmlFor="exampleRadios1">
                            ذكر
                          </label>
                        </div>
                      </div>
                      <div className="form-group col-md-4">
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"  value="femail" onChange={ (e)=>setGender(e.target.value) } />
                          <label className="form-check-label pr-3" htmlFor="exampleRadios2">
                            انثي
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="gridCheck" />
                          <label className="form-check-label pr-3" htmlFor="gridCheck">
                            انت موافق علي <a href="#" className="main-c">اتفاقية المستخدم</a> و <a href="#" className="main-c">سياسة الخصوصية</a>
                          </label>
                        </div>
                      </div>
                  <button  className="btn main-bgc btn-block text-white">تسجيل حساب الان</button>
                </form>
              </div>
              <div className="col-md">
                <img className="w-100" src={img} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}


export default Signup;
