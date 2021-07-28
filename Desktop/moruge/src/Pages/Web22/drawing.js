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
    document.querySelector(".wh-board").classList.toggle("col-md-12 mb-5");
    document.querySelector(".chat-area").classList.toggle("col-md-12 mt-5");
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
                <img src="img/characters/images.jpeg" class="me" alt="">
                <p class="w-100 sec-bg fw-bold p-3 my-3">${msg}</p>
                <span class="seen">122.0 </span>
              </div>
			`;
			return chObj;
}
