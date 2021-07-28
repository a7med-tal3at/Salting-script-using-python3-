// Core
import React, { Component } from 'react';

// Styles 
import './../css/style.css';


class DashboardForgetPassword extends Component {
    render() {
        return (
            <section className="log-body" dir='ltr'>
                <div className="container">
                    <div className="gap py-5"></div>
                    <div className="d-flex justify-content-center">
                        <div className='bg-white p-3 w-75 shadow rounded'>
                            <form >
                                <h3 className='text-center text-capitalize fw-bold'>moruge admin panel <span className="text-danger">forget password</span></h3>
                                <div class="form-group py-3">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control border" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter E-mail" />
                                </div>

                                <button type="submit" class="btn btn-danger">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default DashboardForgetPassword;