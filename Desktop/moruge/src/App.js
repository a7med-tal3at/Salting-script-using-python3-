// Core
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Desisions from './Components/Desisions';

// Pages
import Index from './Pages/Index';
import About from './Pages/About';
import AuthCode from './Pages/Auth_code';
import Course from './Pages/Course';
import Course_1 from './Pages/Course_1';
import Profile_in_search from './Pages/Profile_in_search';
import Res_signup from './Pages/Res_signup';
import Select_type from './Pages/Select_type';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import User_profile from './Pages/User_profile';
import Web11 from './Pages/Web11';
import Web12 from './Pages/Web12';
import Web13 from './Pages/Web13';
import Web18 from './Pages/Web18';
import Web20 from './Pages/Web20';
import Web29 from './Pages/Web29';
import Web22 from './Pages/Web22';
import Web23 from './Pages/Web23';
import Web40 from './Pages/Web40';
import Web41 from './Pages/Web41';
import Web42 from './Pages/Web42';
import Web39 from './Pages/Web39';
import Web32 from './Pages/Web32';
import Web38 from './Pages/Web38';
import Web28 from './Pages/Web28';
import Web17 from './Pages/Web17';
import Web31 from './Pages/Web31';
import Web37 from './Pages/Web37';
import Web26 from './Pages/Web26';
import Web36 from './Pages/Web36';
import Web19 from './Pages/Web19';
import Web33 from './Pages/Web33';
import Web16 from './Pages/Web16';
import Web25 from './Pages/Web25';
import Web27 from './Pages/Web27';
import Web30 from './Pages/Web30';
import Web14 from './Pages/Web14';
import Web47 from './Pages/Web47';

// Admin OR Dashbaord Pages

import DashboardLogin from './Dashboard/Login';
import DashboardForgetPassword from './Dashboard/ForgetPassword';
import DashboardResetPassword from './Dashboard/ResetPassword';

// Reandering
class App extends Component {
  render() {
    return (
        <Router>
          { window.location.href.indexOf('dashboard') == -1 ? <Navbar /> : null }
          <Route exact path="/" component={Index}></Route>
          <Route path="/auth_code" component={AuthCode}></Route>
          <Route path="/signin" component={Signin}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/profiles" component={Profile_in_search}></Route>
          <Route path="/art_board" component={Web22}></Route>
          <Route path="/web39" component={Web39}></Route>
          <Route path="/web40" component={Web40}></Route>
          <Route path="/web23" component={Web23}></Route>
          <Route path="/web20" component={Web20}></Route>
          <Route path="/web32" component={Web32}></Route>
          <Route path="/web38" component={Web38}></Route>
          <Route path="/user" component={User_profile}></Route>
          <Route path="/web28" component={Web28}></Route>
          <Route path="/web17" component={Web17}></Route>
          <Route path="/web31" component={Web31}></Route>
          <Route path="/web33" component={Web33}></Route>
          <Route path="/web37" component={Web37}></Route>
          <Route path="/web26" component={Web26}></Route>
          <Route path="/web41" component={Web41}></Route>
          <Route path="/web11" component={Web11}></Route>
          <Route path="/web12" component={Web12}></Route>
          <Route path="/web13" component={Web13}></Route>
          <Route path="/web42" component={Web42}></Route>
          <Route path="/web36" component={Web36}></Route>
          <Route path="/web19" component={Web19}></Route>
          <Route path="/web18" component={Web18}></Route>
          <Route path="/web16" component={Web16}></Route>
          <Route path="/web25" component={Web25}></Route>
          <Route path="/web27" component={Web27}></Route>
          <Route path="/web30" component={Web30}></Route>
          <Route path="/web14" component={Web14}></Route>
          <Route path="/web14" component={Web14}></Route>
          <Route path="/web29" component={Web29}></Route>
          <Route path="/web47" component={Web47}></Route>
          <Route path="/step_one" component={Select_type}></Route>
          <Route path="/courses" component={Course}></Route>
          <Route path="/course_1" component={Course_1}></Route>
          <Route path="/about" component={About}></Route>
          { window.localStorage.length == 0  && 
            window.location.href.indexOf('dashboard') == -1 ? 
            <Desisions /> : null }
          <Route path="/dashboard_login" component={DashboardLogin}></Route>
          <Route path="/dashboard_forget_password" component={DashboardForgetPassword}></Route>
          <Route path="/dashboard_reset_password" component={DashboardResetPassword}></Route>
          { window.location.href.indexOf('dashboard') == -1 ? <Footer /> : null}

          

        </Router>
    );
  }
}

export default App;
