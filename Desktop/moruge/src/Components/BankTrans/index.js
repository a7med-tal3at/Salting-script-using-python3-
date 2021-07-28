import React, { Component } from 'react';

class BankTrans extends Component {
  render() {
    return (
      <>
        <form>
            <div class="row">
                <div class="col-md-6">
                <input type="text" class="form-control border" placeholder="اسم ابنك" />
                </div>
                <div class="col-md-6">
                <input type="text" class="form-control border" placeholder="اسم حامل البطاقة" />
                </div>
                <div class="col-md-6 mt-5">
                <input type="text" class="form-control border" placeholder="اسم ابنك" />
                </div>
            </div>
        </form>
      </>
    );
  }
}

export default BankTrans;