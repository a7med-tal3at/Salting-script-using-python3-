// Core
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { NavLink } from 'react-router-dom';

// Components
import AsideBar from './../../Components/AsideBar';
import Completed from '../../Components/Completed';
import PersonalInfo from '../../Components/PersonalInfo';

// Images
import img from './../../img/characters/user.png';


// Reandering
// class Web47 extends Component {
const Web47 = () => {
    const [files, setFiles] = useState([]);

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
        setFiles(
            acceptedFiles.map((file) =>
            Object.assign(file, {
                preview: URL.createObjectURL(file),
            })
            )
        )
        },
    })

    const images = files.map((file) => (
        <div key={file.name}>
          <div>
            <img src={file.preview} style={{ width: "200px", height: "200px" }} alt="preview" />
          </div>
        </div>
      ))

    return (
        <>
            <Completed />
            <div className="gap my-5"></div>
            <section className="profile-content">
                <div className="container">
                <div className="row">
                    <div className="col-md-3">
                    <AsideBar />
                    </div>
                    <div className="col-md-8 sec-bg p-3">
                        <div className="d-flex p-3 w-50 mx-auto">
                            <NavLink to="/web29" activeClassName="main-bgc" className="btn btn-secondary text-white">المعلومات الشخصية</NavLink>
                            <NavLink to="/web47" activeClassName="main-bgc" className="btn btn-secondary">الشهادات الدراسية</NavLink>
                        </div>
                        <div className="text-center position-relative my-3">
                            <label htmlFor="f-inp">
                                <i
                                className="prof-img-btn fa fa-camera p-2 main-bgc text-white rounded-circle position-absolute"
                                ></i>
                            </label>
                            <input type="file" className="d-none" id="f-inp" />
                            <img src={img} className="prof-img rounded-circle" alt="..." />
                        </div>
                        <div className="certificate">
                            <div className="certi-img">
                                <h6 className="fw-bold text-right">صورة المؤهل الدراسي</h6>
                                <div className="row">
                                    <dvi className="col-md-7" >
                                        <div { ...getRootProps() } className="p-3 border">
                                            <i class="fa fa-picture-o" aria-hidden="true"></i>
                                            <input { ...getInputProps() }/>
                                        </div>
                                        <div>{images}</div>
                                    </dvi>
                                    <div className="col-md-4">
                                        <button className="btn btn-link" { ...getRootProps() }>
                                            <label htmlFor="clu-inp">رفع صورة من جهازك</label>
                                            <i class="fa fa-cloud-upload" aria-hidden="true"></i>
                                            <input { ...getInputProps() } className="d-none" id="clu-inp" />
                                        </button>
                                        <div>{images}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="btn main-bgc fw-bold text-white d-block mx-auto">حفظ</button>
                    </div>
                </div>
                </div>
            </section>  
            <div className="gap"></div>
        </>
    );
}

export default Web47;
