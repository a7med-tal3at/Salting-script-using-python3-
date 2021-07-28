import React, { Component } from 'react';
import { Link } from "react-router-dom";

import user from "./../../img/characters/user.png";
import bgImg from "./../../img/features/b-img.jpeg";

class CourseCard extends Component {
    render () {
        return (
            <div className="col-md-3">
                <div className="c-card shadow mb-5 bg-white rounded">
                    <div className="top position-relative">
                        <img src={user} className="inst-img position-absolute rounded-circle" alt="" />
                        <img src={bgImg} className="w-100" alt="" />
                    </div>
                    <div className="bottom text-right my-3">
                        <div className="bottom-top d-flex text-center">
                            <h5 className="main-c">{this.props.name}</h5>
                            <div className="rate">
                                <i className="fa fa-star therd-c"></i>
                                <p style={{fontSize: "12px"}}>{this.props.rate} تقييم</p>
                            </div>
                        </div>
                        <h6 className="fw-bold text-secondary">
                        الجامعة: <span className="main-c">{this.props.univers}</span>
                        </h6>
                        <h6 className="fw-bold text-secondary">
                        عدد الساعات: <span className="main-c">{this.props.time} ساعة</span>
                        </h6>
                        <div className="d-flex justify-content-between mt-3">
                            <Link to="/course_1" className="btn main-bgc text-white">تفاصيل الكورس</Link>
                            <h5 className="main-c">{this.props.price} ريال</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CourseCard