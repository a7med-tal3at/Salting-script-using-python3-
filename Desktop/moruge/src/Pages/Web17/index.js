// Core
import React, { Component } from 'react';
import axios from 'axios';

// Components
import CompleteData from '../../Components/CompleteData';
import Search from '../../Components/Search';
import AsideBar from '../../Components/AsideBar';

// Image
import img from "./../../img/characters/user.png";
import img_logo from '../../img/logo/1200px-Flag_of_Saudi_Arabia.svg.png';

// style
import "./Web17.css";


// Reandering
class Web17 extends Component {

  state = {
    name:  "",
    email: "",
    phone: "", 
    country: ""
  }
 

  getUserProfile = () => {
    let token = JSON.parse(localStorage.getItem('user')).access_token;
    axios({
      method: "get",
      url: 'https://moroj-apis.herokuapp.com/api/user',
      headers: { 
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`
      },
    })
      .then(function (response) {

        localStorage.setItem('std', JSON.stringify(response.data.student))        
        
      })
      .catch(function (response) {
        console.log(response.error);
      })

  }


  componentDidMount() {
    this.getUserProfile();
    let std = JSON.parse(localStorage.getItem('std'))
    this.setState({
      name: std.name,
      phone: std.phone,
      email: std.email,
      country: std.country
    }) 

  }

  handelName = (e) => {
    this.setState({name: e.target.value});
  }

  handelPhone = (e) => {
    this.setState({phone: e.target.value});
  }

  handelEmail = (e) => {
    this.setState({email: e.target.value});
  }

  render() {
    return (
        <>
          <CompleteData name={this.state.name} />
          <Search class="" />
          <div className="gap my-5"></div>
          <section className="profile-content">
            <div className="container">
              <div className="row">
              <div className="col-md-3">
                <AsideBar />
              </div>
              <div className="col-md-8 sec-bg mr-3 mt-3 pt-5">
                <div className="container">
                  <h3 className="text-center">اعدادات الملف الشخصي</h3>
                  <div className="text-center position-relative my-3">
                    <label htmlFor="f-inp">
                      <i
                        className="prof-img-btn fa fa-camera p-2 main-bgc text-white rounded-circle position-absolute"
                      ></i>
                    </label>
                    <input type="file" className="d-none" id="f-inp" />
                    <img src={img} className="prof-img rounded-circle" alt="..." />
                  </div>
                  <form className="text-right" >
                    <div className="form-row justify-content-between">
                        <div className="form-group col-md-6">
                          <div className="form-group">
                            <label className="mt-2 fw-bold" htmlFor="inputEmail4">الاسم</label>
                            <input type="text" className="form-control" value={this.state.name} onChange={this.handelName} />
                          </div>
                        <div className="form-group">
                          <label className="mt-2 fw-bold" htmlFor="inputPassword4">ابريد الاليكتروني</label>
                          <input type="email" className="form-control" id="inputEmail4" value={this.state.email} onChange={this.handelEmail} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="inputState" className="mt-2 fw-bold">الدولة</label>
                          <div className="d-flex justify-content-between">
                          <select id="inputState" className="form-control">
                            <option selected>{this.state.country}</option>
                            <option>...</option>
                          </select>
                          <img src={img_logo} className="rounded-circle cunt-logo" alt="..." />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="mt-2 fw-bold">رقم الهاتف</label>
                          <input type="text" className="form-control" value={this.state.phone} onChange={this.handelPhone} />
                        </div>

                        <div className="form-group">
                          <label className="mt-2 fw-bold">النوع</label>
                          <div className="form-check d-flex">
                              <div className="radios ml-3 px-2">
                              <label className="fw-bold" htmlFor="gridRadios1">ذكر</label>
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"  />
                              </div>
                              <div className="radios px-2">
                                <label className="fw-bold" htmlFor="gridRadios2">انثي</label>
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                              </div>
                            </div>
                        </div>
                        </div>
                        <div className="form-group col-md-5">
                          <div className="form-group">
                            <label className="mt-2 fw-bold">المرحلة الدراسية</label>
                            <select className="form-control" defaultValue={{label:"الاعدادي", value:0}}>
                              <option >Choose...</option>
                              <option>...</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label className="mt-2 fw-bold">الفصل الدراسي</label>
                            <select className="form-control" defaultValue={{label:"الاول", value: 1}}>
                              <option>Choose...</option>
                              <option>...</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label className="mt-2 fw-bold">المدينة</label>
                            <select className="form-control" defaultValue={{label:"مصر", value: 2}}>
                              <option >Choose...</option>
                              <option>...</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    <button type="submit" className="btn btn-primary d-block mb-5 mx-auto">حفظ</button>
                  </form>
                </div>
              </div>
            </div>
            </div>
          </section>
          <div className="gap"></div>
        </>
    );
  }
}

export default Web17;
