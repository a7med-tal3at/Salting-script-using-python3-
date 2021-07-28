import Reat from 'react';
import { Link } from "react-router-dom";

// Images
import img2 from './../../img/characters/man-1.jpeg';

// User Api methods
import { logOut } from '../../Api/Users';

const Registerd = () => {
    return (
        <div className="btn-container d-flex justify-content-between w-25">
          <div className="position-relative pt-2">
            <span className="count position-absolute main-bgc">0</span>
            <i className="fa fa-bell fa-lg"></i>
          </div>
          
          <li className="nav-item dropdown" style={{listStyle:'none'}}>
            <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src={img2} className="man-img rounded-circle" style={{width: "30px", height: "30px"}} />
            </a>
            <div className="dropdown-menu text-right" aria-labelledby="navbarDropdown">
              <Link to='/web17' className="dropdown-item" >الحساب</Link>
              <Link to='/web16' className="dropdown-item" >الحصص</Link>
              <Link to='/web38' className="dropdown-item" >العروض</Link>
            </div>
          </li>
          <button onClick={ logOut } className="btn text-white" style={{background: "#c2007b"}}>تسجيل الخروح</button>
        </div>
    );
}

export default Registerd;