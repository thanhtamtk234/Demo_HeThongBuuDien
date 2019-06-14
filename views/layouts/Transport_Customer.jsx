import React, { Component } from 'react';
import Css from './Css';
import Footer from './Footer';
var DefaultLayout = require('./default');
class Transport_Customer extends Component {
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
                        {/* <div className="col-md-4">
                            Mã bưu cục:<input className="mabuucuc" name="mabuucuc"/><br />
                            Ngày gửi:<input className="ngaygui" name="ngaygui"/><br />
                            Mã đơn hàng:<input className="madonhang" name="madonhang" />
                        </div> */}

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
                            {/* <tbody>
                                <tr>
                                    <td>3.Loại hàng gửi:<br />
                                        <label className="checkbox-inline"><input type="checkbox" name="tailieu" />Tài liệu</label>
                                        <label className="checkbox-inline"><input type="checkbox" name="hanghoa"/>Hàng hóa</label><br />
                                        4.Nội dung đơn hàng:<br/>
                                        <input className="noidung" name="noidung"/>
                                    </td>
                                    <td className="cuoc" rowSpan={2}>6.Cước: <br />
                                        a.Cước chính:<input className="cuoc" name="cuocchinh" /><br />
                                        b.Cước phụ:<input className="cuoc" name="cuocphu" /><br />
                                        b.Thu hộ:<input className="cuoc" name="thuho" /><br />

                                    </td>
                                </tr>
                            </tbody> */}
                            {/* <tbody>
                                <tr>
                                    <td>4.Cam kết của người gửi<br />
                                        Người gửi chấp nhận các điều khoản của bưu điện<br />
                                        <label className="checkbox-inline"><input type="checkbox" defaultValue />Tôi đồng ý</label>

                                    </td>
                                </tr>
                            </tbody> */}
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

export default Transport_Customer;