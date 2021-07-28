// Core
import React, { Component } from 'react';

// Images
import img from "./../../img/poster/download.jpeg";

// Videos
import vid from "./algorithm.mp4";

// Components
import CourseLect from '../../Components/CourseLect';
import CourseAsideBar from '../../Components/CourseAsideBar';

// Reandering
class Course_1 extends Component {
  render() {
    return (
        <>
          <section className="profile-home main-bgi py-5 ">
          <div className="container position-relative">
            <div className="gap"></div>
            <h3 className="text-white fw-bold text-center">
              مقدمة في علوم الحاسب
            </h3>
            <h3 className="text-white fw-bold sec-title text-center center-after white-after">
              المعلم: <span className="therd-c">احمد محمد</span>
            </h3>
          </div>
          <div className="gap"></div>
        </section>
          <div className="gap"></div>
          <section className="course-content">
          <div className="container">
            <div className="row">
              <div className="col-md-3 sec-bg p-3" style={{height: "315px"}}>

                <h5 className="sec-title text-right">تفاصيل الكورس</h5>
                <CourseAsideBar ico='fa-user' comp_name='الاستاذ احمد عبد المطلب' />
                <CourseAsideBar ico='fa-video-camera' comp_name='77 محاضرة' />
                <CourseAsideBar ico='fa-share-alt' comp_name='4 مشاريع' />
                <CourseAsideBar ico='fa-commenting' comp_name='جروب تفاعلي' />
                <h3 className="main-c text-center my-3">200 ريال</h3>
                <button className="btn btn-block main-bgc text-white fw-bold">اشتراك</button>
              </div>
              <div className="col-md-8">
                <video
                  src={vid}
                  poster={img}
                  className="w-100 rounded"
                  controls>
                </video>
                <CourseLect lect_pos='الدرس الاول' lect_name='ما هو الحاسب الالي؟' time='12 دقيقة' />
                <CourseLect lect_pos='الدرس الاول' lect_name='ما هو الحاسب الالي؟' time='12 دقيقة' />
                <CourseLect lect_pos='الدرس الاول' lect_name='ما هو الحاسب الالي؟' time='12 دقيقة' />
                <CourseLect lect_pos='الدرس الاول' lect_name='ما هو الحاسب الالي؟' time='12 دقيقة' />
                <CourseLect lect_pos='الدرس الاول' lect_name='ما هو الحاسب الالي؟' time='12 دقيقة' />
                <CourseLect lect_pos='الدرس الاول' lect_name='ما هو الحاسب الالي؟' time='12 دقيقة' />
              </div>
            </div>
          </div>
        </section>
        </>
    );
  }
}

export default Course_1;
