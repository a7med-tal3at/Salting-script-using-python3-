import React , { Component } from 'react';

class CourseLect extends Component {
    render() {
        return (
            <div className="course-lect d-flex justify-content-between shadow p-3 mb-5 bg-white rounded mt-3">
                <div className="d-flex main-c">
                    <i className="fa fa-video-camera"></i>
                    <h6 className="fw-bold mx-2">{this.props.lect_pos}</h6>
                    <span className="text-secondary fw-bold">{this.props.lect_name}</span>
                </div>

                <div className="d-flex main-c">
                    <h6 className="fw-bold ">المدة</h6>
                    <span className="text-secondary fw-bold mx-2">{this.props.time}</span>
                    <i className="fa fa-play rounded-circle p-2 main-bgc text-white"></i>
                </div>
            </div>
        );
    }
}

export default CourseLect;