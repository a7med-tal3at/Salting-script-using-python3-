import Reat from 'react';
import { Link } from "react-router-dom";

const NotRegisterd = () => {
    return(
        <div className="btn-container">
            <Link to="/signin" className="btn main-bgc text-white">تسجيل الدخول</Link>
            <span>او</span>
            <Link to="/step_one" className="btn text-white" style={{backgroundColor: "#c2007b"}}>التسجيل</Link>
        </div>
    );
}

export default NotRegisterd;


