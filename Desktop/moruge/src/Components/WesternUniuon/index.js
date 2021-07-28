import React, { Component } from 'react';

class WesternUniuon extends Component {
  render() {
    return (
        <div>
            <form>
                <div class="row">
                    <div class="col-md-6">
                      <input type="text" class="form-control border" placeholder="اسم الشخص" />
                    </div>
                    <div class="col-md-6">
                      <input type="text" class="form-control border" placeholder="اسم حامل البطاقة" />
                    </div>
                </div>
            </form>
        </div>
    );
  }
}

export default WesternUniuon;