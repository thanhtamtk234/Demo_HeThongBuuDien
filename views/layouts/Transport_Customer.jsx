import React, { Component } from 'react';
import Css from './Css';
import Footer from './Footer';
import DefaultLayout from './default'

export default class Transport_Customer extends Component {
    render() {
        return (
          <DefaultLayout>
            <Css />
            <form className="Transport" method="POST">
              <div className="container guihang">
                <div className="row shipping-header">
                  <div className="col-md-4"></div>
                  <div className="col-md-6">
                    <h1>ĐƠN VẬN</h1>
                  </div>
                </div>
                <div className="row nguoigui">
                  <table border={1} className="don">
                    <thead>
                    <tr>
                      <th>Người gửi</th>
                      <th>Người nhận</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td rowSpan={2}>1.Họ tên người gửi *   <input className="nguoigui" name="hotengui" required/><br />
                        <span>Địa chỉ *</span>
                        <input className="nguoigui" name="diachigui" required/><br />
                        <span>Số điện thoại *</span>
                        <input className="nguoigui" name="sdtgui" required/></td>
                      <td rowSpan={2}>2.Họ tên người nhận *  <input className="nguoinhan" name="hotennhan" required/><br />
                        <span> Địa chỉ * </span>
                        <input className="nguoigui" name="diachinhan" required/><br />
                        <span> Số điện thoại * </span>
                        <input className="nguoigui" name="sdtnhan" required/></td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <button type="submit" className="btn btn-guihang">OK</button>
                </div>
              </div>
            </form>
            <Footer />
          </DefaultLayout>
        );
    }
}
