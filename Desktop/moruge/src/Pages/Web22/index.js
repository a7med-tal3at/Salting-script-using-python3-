// Core
import React, { Component } from 'react';

// Styles
import './art_board.css';

// images
import img from "./../../img/characters/user.png";

// Reandering
class Web22 extends Component {
  componentDidMount() {

    let whiteBoard = document.querySelector(".wh-board");
    let can = document.querySelector("#canvas");
    fitToContainer(can);
    let ctx = can.getContext("2d");
    let painting = false;


    document.querySelector(".fa-pencil").onclick = function() {
      this.classList.add("active");
      can.onmousedown = function() {
        start(1);
      };
      can.onmouseup = end;
      can.onmousemove = paintTools.pencil;
      };
      document.querySelector(".fa-arrows-alt").onclick = function() {
        document.querySelector(".wh-board").classList.toggle("col-md-12");
        document.querySelector(".chat-area").classList.toggle("col-md-12");
        fitToContainer(can);
          can.onmousedown = function() {
            start(1);
          };
          can.onmouseup = end;
          can.onmousemove = paintTools.pencil;
      };

    document.querySelector(".send-data .add-msg").onclick = function () {
        let cont = document.querySelector(".msg-content").value;
        if (cont) {
        	document.querySelector(".chat-body").appendChild(createMessage(cont));
          document.querySelector(".msg-content").value = "";
        }
      };

    function fitToContainer(canvas){
      canvas.style.width ='100%';
      canvas.style.height='81%';
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function start(e, paint) {
      painting = true;
      if (paint == 1) {
        paintTools.pencil(e);
      } else {
        paintTools.boardPen(e);
      }
    }

    function end() {
      painting = false;
      ctx.beginPath();
    }

    function getMousePos(canvas, evt) {
      var rect = canvas.getBoundingClientRect();
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      };
    }

    let paintTools = {
        pencil: function(e) {
          if(!painting) return;
          ctx.lineWidth = 2;
          ctx.lineCap = "round";
          ctx.strokeStyle = "#000";
          let mAxis = getMousePos(can, e);
          ctx.lineTo(mAxis.x , mAxis.y);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(mAxis.x , mAxis.y);
        },

        boardPen:function(e) {
          if(!painting) return;
          ctx.lineWidth = 5;
          ctx.lineCap = "round";
          ctx.strokeStyle = "#00F";
          let mAxis = getMousePos(can, e);
          ctx.lineTo(mAxis.x , mAxis.y);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(mAxis.x , mAxis.y);
        }

    }

    // Start Chating Logic

    function createMessage(msg) {
    			let chObj = document.createElement('div');
    			chObj.classList.add("chat-obj");
    			chObj.innerHTML = `
    							<div class="d-flex flex-column align-items-start">
                    <img src=${img} class="me" alt="">
                    <p class="w-100 sec-bg fw-bold p-3 my-3">${msg}</p>
                    <span class="seen">122.0 </span>
                  </div>
    			`;
    			return chObj;
    }

    // Range Slider logic
    var slider = document.getElementById("myRange");
    var output = document.getElementById("value");

    output.innerHTML = slider.value;

    slider.oninput = function() {
      output.innerHTML = this.value;
    }

    var start_value = slider.getAttribute("value");

    var x = start_value;
    var color = 'linear-gradient(90deg, var(--main-color)' + x + '% , rgb(214, 214, 214)' + x + '%)';
    slider.style.background = color;

    slider.addEventListener("mousemove", function() {
        x = slider.value;
        color = 'linear-gradient(90deg, var(--main-color)' + x + '% , rgb(214, 214, 214)' + x + '%)';
        slider.style.background = color;
    });

    
  }

  hideControlers = () => {
    document.querySelector(".ov-lay").classList.toggle('d-none');
    document.body.style.overflowY = "hidden";
  }

  showControlers = () => {
    document.querySelector(".ov-lay").classList.toggle('d-none');
    document.body.style.overflowY = "scroll";
  }

  state = {
    value:''
  }

  render() {
    return (
        <>
          <div className="ov-lay direc d-none">
            <div className="w-75 h-75 p-5 bg-white rounded" >
              <h6 className="sec-bg main-c fw-bold text-center p-3 mb-2">ضبط اعدادات الصوت</h6>
              <div className="title-logo d-flex my-3 justify-content-center">
                <i className="fa fa-microphone fa-lg main-c p-3"></i>
                <h4 className="main-c fw-bold">اختبار الميكروفون</h4>
                </div>
                <h6 className="text-secondary text-center fw-bold">تأكد من توصيل الميكروفون و التحدث فيه</h6>
                <div className="slideContainer">
                  <input type="range" min="0" max="100" value={this.state.value} onChange={ (e)=> { this.setState({value: e.target.value}) }}  className="slider" id="myRange" />
                  <p className="text-center fw-bold main-c">
                    <span id="value"></span>
                  </p>
                </div>
                <button className="btn main-bgc text-white fw-bold d-block mx-auto" onClick={this.showControlers}><i className="fa fa-long-arrow-left"></i> ابدا الحصة</button>
            </div>
          </div>
          <nav className="p-3 main-bgc mb-5">
            <div className="container">
              <div className='art-board-header row position-relative'>
                <div className="col-md text-right d-flex">
                  <h5 className="text-white mx-auto fw-bold pt-3 ml-3">وقت الحصة الحالي</h5>
                </div>
                <div className="col-md d-flex justify-content-center align-items-center my-3">
                  <div className="text-white text-center fw-bold d-flex">
                    <div className="time-sec">
                      <div className="time-block rounded p-3 bg-white main-c">
                        20
                      </div>
                      <p>ثانية</p>
                    </div>
                    <span className="m-3">:</span>
                    <div className="time-men">
                      <div className="time-block rounded p-3 bg-white main-c">
                        15
                      </div>
                      <p>دقيقة</p>
                    </div>
                    <span className="m-3">:</span>
                    <div className="time-hou">
                      <div className="time-block rounded p-3 bg-white main-c">
                        00
                      </div>
                      <p>ساعة</p>
                    </div>
                  </div>
                </div>
                <div className="col-md pt-3 text-center">
                  <button className="btn btn-dark text-white fw-bold">
                    <i className="fa fa-share-square-o"></i>
                    مشاركة الشاشة
                  </button>
                  <button className="btn btn-secondary text-white fw-bold">
                    انهاء الجلسة
                  </button>
                </div>
                  <div className="d-flex std-tech-container position-absolute justify-content-center w-100">
                    <div className="teacher ml-3 text-center">
                      <img src={img} className="techImg d-flex mb-2" />
                      <i onClick={this.hideControlers} className="fa fa-microphone fa-lg main-c p-3 "></i>
                    </div>
                    <div className="student text-center">
                    <img src={img} className="stdImg d-flex mb-2" />
                      <i onClick={this.hideControlers} className="fa fa-microphone fa-lg main-c p-3 "></i>
                    </div>
                  </div>
              </div>
            </div>
          </nav>
          <div className="gap"></div>
          <section className="lect-content">
            <div className="container">
              <div className="row mb-5">
                <div className="wh-board col-md-7 p-0 py-3 ml-3 shadow rounded ">
                  <div className="top-h d-flex justify-content-between px-3 ">
                    <i className="fa fa-arrows-alt p-3 rounded"></i>
                    <h3 className="text-center fw-bold main-c">White Board</h3>
                  </div>
                  <canvas id="canvas"></canvas>
                  <div className="ic-container p-3 main-bgc text-center">
                    <i className="p-3 bg-white mr-2 rounded fa fa-pencil-square-o"></i>
                    <i className="p-3 bg-white mr-2 rounded fa fa-hand-paper-o"></i>
                    <i className="p-3 bg-white mr-2 rounded fa fa-picture-o"></i>
                    <i className="p-3 bg-white mr-2 rounded fa fa-paperclip"></i>
                    <i className="p-3 bg-white mr-2 rounded fa fa-circle-thin"></i>
                    <i className="p-3 bg-white mr-2 rounded fa fa-arrows-h"></i>
                    <i className="p-3 bg-white mr-2 rounded fa fa-pencil"></i>
                  </div>
                </div>

                <div className="chat-area col-md-4 shadow rounded my-5 p-3">
                  <h3 className="text-center main-c ">
                    <i className="fa fa-commenting fa-sm"></i>
                    chat
                  </h3>
                    <div className="chat-body">

                    </div>
                    <div className="send-data d-flex my-3">
                      <div className="d-flex">
                        <i className="fa fa-picture-o"></i>
                        <i className="fa fa-paperclip"></i>
                      </div>
                      <input type="text" className="msg-content border-0 w-100" placeholder="اكتب هنا" />
                      <button type="submit" className="add-msg btn btn-link main-c fw-bold">ارسال</button>
                    </div>
                </div>
              </div>
            </div>
          </section>
        </>
    );
  }
}

export default Web22;
