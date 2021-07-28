import React, { Component } from 'react';

class PayPal extends Component {
  render() {
    return (
        <div>
            <form>
                <div class="row">
                    <div class="col-md-6">
                      <input type="text" class="form-control border" placeholder="البريد الاليكتروني لصاحب الحساب" />
                    </div>
                </div>
            </form>
        </div>
    );
  }
}

export default PayPal;