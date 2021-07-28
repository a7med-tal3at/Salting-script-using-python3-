import React , { Component } from 'react';
import Stars from '../Stars';
class Comments extends Component {
    render() {
        return (
            <div className="obj-com d-flex mt-5">
                <img src={this.props.img} className="rounded-circle" alt="" />
                <div className="ab-text-content pr-3">
                    <h5 className="fw-bold main-c">{this.props.name}</h5>
                    <div className="therd-c r">
                        <Stars rate="5"/>
                    </div>
                    <p className="text-secondary">
                        <i className="fa fa-calendar-minus-o mb-3"></i> {this.props.date}
                    </p>
                    <p className="text-secondary">
                        {this.props.comment}
                    </p>
                </div>
            </div>
        );
    }
}

export default Comments;