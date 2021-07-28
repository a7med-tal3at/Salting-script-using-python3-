// Core
import React, { Component } from 'react';

// Images
import img from "./../../img/characters/user.png";

// Components
import Pagination from "./../../Components/Pagination";

// Reandering
class Web38 extends Component {
  render() {
    return (
        <>
          <section className="profile-home main-bgi py-5 ">
            <div className="container position-relative">
              <div className="row">
                <div className="col">
                  <h4 className="sec-title text-right text-white mx-auto fw-bold">
                    مرحبا بك <span className="therd-c">Username</span> في منصة مروج
                  </h4>
                </div>
                <div className="col text-right text-white">
                  <h3 className="fw-bold">نسبة اكمال ملفك الشخصي هي <span className="therd-c">77%</span></h3>
                  <h6 className="my-3">قم باستكمال ملفك الشخصي لكي تتمكن من استخدام موقعنا</h6>
                  <button className="btn btn-light">اكمال البيانات</button>
                </div>
              </div>
            </div>
            <div className="gap"></div>
          </section>
          <div className="container-fluid">
            <div className="drop-cont shadow sec-bg rounded p-5 w-75 position-absolute">
              <div className="drops row">
                <div className="col-sm">
                  <div className="dropdown">
                    <button  className="btn dropdown-toggle w-100 mb-3 py-3 bg-white px-3" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      اختر المرحلة ...
                    </button>
                    <div className="dropdown-menu text-right" aria-labelledby="dropdownMenuButton">
                      <a className="dropdown-item" href="#">الابتدائي</a>
                      <a className="dropdown-item" href="#">الاعددي</a>
                      <a className="dropdown-item" href="#">الثانوي</a>
                    </div>
                  </div>
                </div>

                <div className="col-sm">
                  <div className="dropdown">
                    <button className="btn dropdown-toggle w-100 mb-3 py-3 bg-white px-3" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      اختر المادة ...
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a className="dropdown-item" href="#">رياضيات</a>
                      <a className="dropdown-item" href="#">علوم الحاسب</a>
                      <a className="dropdown-item" href="#">الفيزياء الكمية</a>
                    </div>
                  </div>
                </div>

                <div className="col-sm">
                  <div className="dropdown">
                    <button className="btn dropdown-toggle w-100 mb-3 py-3 bg-white px-3" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      اونلاين ...
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                  </div>
                </div>


              </div>
              <div className="search-btn">
                <button className="btn px-5 position-absolute main-bgc">
                    <i className="fa fa-search fa-sm"></i>
                    ابحث عن معلم
                </button>
              </div>
            </div>
          </div>
          <div className="gap my-5"></div>
          <section className="profile-content">
            <div className="container">
              <div className="row">
              <div className="col-md-3">
                <div className="row">
                  <div className="col sec-bg p-3 rounded">
                    <a href="#" className="btn btn-light w-100 fw-bold mb-3 p-3 rounded text-right ">
                      <i className="fa fa-desktop"></i> لوحة الحكم
                    </a>
                    <a href="#" className="btn btn-light w-100 fw-bold mb-3 p-3 rounded text-right ">
                      <i className="fa fa-comments-o"></i> طلباتي
                    </a>
                    <a href="#" className="btn btn-light w-100 fw-bold mb-3 p-3 rounded text-right ">
                      <i className="fa fa-user"></i> ملفي الشخصي
                    </a>
                    <a href="#" className="btn btn-light w-100 fw-bold mb-3 p-3 rounded text-right ">
                      <i className="fa fa-home"></i> طلبات المنزل
                    </a>
                    <a href="#" className="btn btn-light w-100 fw-bold mb-3 p-3 rounded text-right ">
                      <i className="fa fa-credit-card"></i> اعدادات الدفع
                    </a>
                    <a href="#" className="btn btn-light w-100 fw-bold mb-3 p-3 rounded text-right ">
                      <i className="fa fa-sliders"></i> الاعدادات
                    </a>
                    <a href="#" className="btn btn-light w-100 fw-bold mb-3 p-3 rounded text-right " style={{background: "#9fffb6"}}>
                      <i className="fa fa-usd"></i> عرض السعر
                    </a>
                    <div className="gap"></div>
                    <div className="pre-and-cond text-right">
                      <a href="#" className="main-c">سياسة الاسترجاع</a>
                      <span>او</span>
                      <a href="#" className="main-c">تقديم شكوي</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="row sec-bg mr-3 rounded">
                    <div
                    className="res-0 col d-flex justify-content-between "
                    style={{padding: "10px"}}>
                        <div className="d-flex align-items-center">
                          <h5>عروض الاسعار</h5>
                        </div>

                        <div className="d-flex align-items-center">
                          <select class="form-control">
                            <option selected>حالية</option>
                            <option>...</option>
                          </select>
                        </div>
                    </div>
                </div>
                <div className="">
                  <h3 className="mt-5 text-center">حصصك اليوم</h3>
                  <div className="row shadow my-5 mr-3 bg-white rounded position-relative h-25" style={{padding: "10px", marginRight: "2px!important"}}>
                    <div className="col-md-3">
                      <img src={img} className="w-100 h-100" alt="" />
                    </div>
                    <div className="col-md-4 text-right">
                      <h6 className="main-c">
                      <i className="fa fa-user"></i>  محمد علي احمد
                      </h6>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <div className="d-flex justify-content-between" style={{width: "170px"}}>

                        <p className="text-secondary">
                          لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل
                        </p>
                      </div>
                    </div>
                    <div className="col-md-5 text-center">
                      <div className="my-3 w-75 mx-auto d-flex justify-content-between">
                        <div className="d-flex justify-content-between">
                          <h6>المادة</h6>
                          <h6 className="main-c">احياء</h6>
                        </div>
                        <div className="d-flex justify-content-between">
                          <h6>السعر</h6>
                          <h6 className="main-c">120 ريال</h6>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between w-75 mx-auto">
                        <button className="btn btn-danger">حذف</button>
                        <button className="btn main-bgc text-white">موافقة</button>
                      </div>
                    </div>
                    <div className="col-md-12 row text-right mx-auto my-3">
                      <div className="col-md">
                        <i className="fa fa-graduation-cap"></i> سنوات الخبرة 6 / 8 سنوات
                      </div>

                      <div className="col-md d-flex justify-content-end">
                        <button className="mr-2 btn main-bgc text-white">احجز الان</button>
                      </div>
                    </div>
                </div>
                </div>

                <div className="">
                  <div className="row shadow my-5 mr-3 bg-white rounded position-relative h-25" style={{padding: "10px", marginRight: "2px!important"}}>
                    <div className="col-md-3">
                      <img src={img} className="w-100 h-100" alt="" />
                    </div>
                    <div className="col-md-4 text-right">
                      <h6 className="main-c">
                      <i className="fa fa-user"></i>  محمد علي احمد
                      </h6>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <div className="d-flex justify-content-between" style={{width: "170px"}}>

                        <p className="text-secondary">
                          لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل
                        </p>
                      </div>
                    </div>
                    <div className="col-md-5 text-center">
                      <div className="my-3 w-75 mx-auto d-flex justify-content-between">
                        <div className="d-flex justify-content-between">
                          <h6>المادة</h6>
                          <h6 className="main-c">احياء</h6>
                        </div>
                        <div className="d-flex justify-content-between">
                          <h6>السعر</h6>
                          <h6 className="main-c">120 ريال</h6>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between w-75 mx-auto">
                        <button className="btn btn-danger">حذف</button>
                        <button className="btn main-bgc text-white">موافقة</button>
                      </div>
                    </div>
                    <div className="col-md-12 row text-right mx-auto my-3">
                      <div className="col-md">
                        <i className="fa fa-graduation-cap"></i> سنوات الخبرة 6 / 8 سنوات
                      </div>

                      <div className="col-md d-flex justify-content-end">
                        <button className="mr-2 btn main-bgc text-white">احجز الان</button>
                      </div>
                    </div>
                </div>
                </div>
              </div>
            </div>
            </div>
          </section>
          <button className="btn main-bgc text-white fw-bold d-block mx-auto">انشاء عرض السعر</button>
          <div className="gap"></div>
        </>
    );
  }
}

export default Web38;
