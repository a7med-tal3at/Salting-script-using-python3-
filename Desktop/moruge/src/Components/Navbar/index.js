// Core
import React from 'react';
import { Link } from "react-router-dom";

// Images
import img1 from '../../img/logo/1200px-Flag_of_Saudi_Arabia.svg.png';

// styles
import './Navbar.css';

// Components
import Registerd from './Registerd';
import NotRegisterd from './NotRegisterd';


const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light shadow bg-white">
      <div className="container position-relative">
        <div className="logo position-absolute shadow  mb-5 bg-white rounded p-3"></div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-start text-primary text-right" id="navbarSupportedContent">
          <ul className="navbar-nav ">
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle text-dark" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src={ img1 } className="rounded-circle" style={{width: "30px",height: "30px"}}/>
                السعودية
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item text-right" to="#">رابط 1</Link>
                <Link className="dropdown-item text-right" to="#">رابط 2</Link>
                <Link className="dropdown-item text-right" to="#">رابط 3</Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle text-dark" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src={ img1 } className="rounded-circle" style={{width: "30px",height: "30px"}}/>
                العربية
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item text-right" to="#">رابط 1</Link>
                <Link className="dropdown-item text-right" to="#">رابط 2</Link>
                <Link className="dropdown-item text-right" to="#">رابط 3</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="home-link nav-link" to="#">الرئيسية
                <span className="f-line main-bgc"></span>
                <span className="t-line main-bgc"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/about' className="nav-link">من نحن</Link>
            </li>
            <li className="nav-item">
              <Link to='/courses' className="nav-link ">الكورسات</Link>
            </li>
          </ul>
        </div>
        { localStorage.length > 0 && !localStorage.getItem('stell') ? <Registerd /> : <NotRegisterd /> }
      </div>
    </nav>
  );
}

export default Navbar;
