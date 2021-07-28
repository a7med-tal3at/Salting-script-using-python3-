import React, { Component } from 'react';

class OutTrans extends Component {
  render() {
    return (
        <div>
            <form>
                <div class="row">
                    <div class="col-md-6 p-2 ">
                      <input type="text" class="form-control border" placeholder="اسم ابنك" />
                    </div>
                    <div class="col-md-6 p-2 ">
                      <input type="text" class="form-control border" placeholder="اسم حامل البطاقة" />
                    </div>
                    <div class="col-md-6 p-2 ">
                      <input type="text" class="form-control border" placeholder="البلد" />
                    </div>
                    <div class="col-md-6 p-2 ">
                      <input type="text" class="form-control border" placeholder="رقم الحساب" />
                    </div>
                    <div class="col-md-6 p-2 ">
                      <input type="text" class="form-control border" placeholder="رقم السويفت كود" />
                    </div>
                </div>
            </form>
        </div>
    );
  }
}

export default OutTrans;