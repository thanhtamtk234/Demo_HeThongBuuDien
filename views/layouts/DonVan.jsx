import React, { Component } from 'react';
import Css from './Css';
import Footer from './Footer';
var DefaultLayout = require('./default');
class DonVan extends Component {
    render() {
        return (

            <DefaultLayout>
                <Css />
                <div className="container guihang">
                    <div className="row shipping-header">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <h1>ĐƠN VẬN</h1>
                        </div>
                        <div className="col-md-4">
                            Mã bưu cục:<input className="mabuucuc" /><br />
                            Ngày gửi:<input className="ngaygui" /><br />
                            Mã đơn hàng:<input className="madonhang" />
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
                                    <td rowSpan={2}>1.Họ tên người gửi:   <input className="nguoigui" /><br />
                                        * Địa chỉ: <input className="nguoigui" /><br />
                                        * Số điện thoại: <input className="nguoigui" /></td>
                                    <td rowSpan={2}>2.Họ tên người nhận:   <input className="nguoigui" /><br />
                                        * Địa chỉ: <input className="nguoigui" /><br />
                                        * Số điện thoại: <input className="nguoigui" /></td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>3.Loại hàng gửi:<br />
                                        <label className="checkbox-inline"><input type="checkbox" defaultValue />Tài liệu</label>
                                        <label className="checkbox-inline"><input type="checkbox" defaultValue />Hàng hóa</label><br />
                                        4.Nội dung đơn hàng:<br />
                                        <input className="noidung" />
                                    </td>
                                    <td className="cuoc" rowSpan={2}>6.Cước: <br />
                                        a.Cước chính:<input className="cuoc" /><br />
                                        b.Cước phụ:<input className="cuoc" /><br />
                                        b.Thu hộ:<input className="cuoc" /><br />

                                    </td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>4.Cam kết của người gửi<br />
                                        Người gửi chấp nhận các điều khoản của bưu điện<br />
                                        <label className="checkbox-inline"><input type="checkbox" defaultValue />Tôi đồng ý</label>

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <button type="submit" className="btn btn-guihang">OK</button>
                    </div>

                </div>
                <Footer />
            </DefaultLayout>

        );
    }
}

export default DonVan;