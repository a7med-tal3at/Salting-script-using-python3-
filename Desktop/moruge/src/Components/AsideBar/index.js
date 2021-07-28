// Core
import React from 'react';

const AsideBar = () => {
    return (
      <>
          <div className="sec-bg p-3 rounded">
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
      </>
    );
}

export default AsideBar;