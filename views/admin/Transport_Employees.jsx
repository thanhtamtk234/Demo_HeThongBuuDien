import React, { Component } from 'react';
import Css from '../layouts/Css';
import Footer from '../layouts/Footer';
var DefaultLayout = require('../layouts/default');
class Transport extends Component {
    render() {
        return (

            // <DefaultLayout>
            //     <Css />
            //     <form className="Transport" method="POST">
            //     <div className="container guihang">
            //         <div className="row shipping-header">
            //             <div className="col-md-4"></div>
            //             <div className="col-md-4">
            //                 <h1>ĐƠN VẬN</h1>
            //             </div>
            //             <div className="col-md-4">
            //                 Mã bưu cục:<input className="mabuucuc" name="mabuucuc"/><br />
            //                 Ngày gửi:<input className="ngaygui" name="ngaygui"/><br />
            //                 Mã đơn hàng:<input className="madonhang" name="madonhang" />
            //             </div>

            //         </div>
            //         <div className="row nguoigui">
            //             <table border={1} className="don">
            //                 <thead>
            //                     <tr>
            //                         <th>Người gửi</th>
            //                         <th>Người nhận</th>
            //                     </tr>
            //                 </thead>
            //                 <tbody>
            //                     <tr>
            //                         <td rowSpan={2}>1.Họ tên người gửi *   <input className="nguoigui" name="hotengui" /><br />
            //                            <span>Địa chỉ *</span>  
            //                            <input className="nguoigui" name="diachigui"/><br />
            //                            <span>Số điện thoại *</span>
            //                             <input className="nguoigui" name="sdtgui" /></td>
            //                         <td rowSpan={2}>2.Họ tên người nhận *  <input className="nguoinhan" name="hotennhan" /><br />
            //                            <span> Địa chỉ * </span>
            //                            <input className="nguoigui" name="diachinhan"/><br />
            //                            <span> Số điện thoại * </span>
            //                            <input className="nguoigui" name="sdtnhan" /></td>
            //                     </tr>
            //                 </tbody>
            //                 <tbody>
            //                     <tr>
            //                         <td>3.Loại hàng gửi:<br />
            //                             <label className="checkbox-inline"><input type="checkbox" name="tailieu" />Tài liệu</label>
            //                             <label className="checkbox-inline"><input type="checkbox" name="hanghoa"/>Hàng hóa</label><br />
            //                             4.Nội dung đơn hàng:<br/>
            //                             <input className="noidung" name="noidung"/>
            //                         </td>
            //                         <td className="cuoc" rowSpan={2}>6.Cước: <br />
            //                             a.Cước chính:<input className="cuoc" name="cuocchinh" /><br />
            //                             b.Cước phụ:<input className="cuoc" name="cuocphu" /><br />
            //                             b.Thu hộ:<input className="cuoc" name="thuho" /><br />

            //                         </td>
            //                     </tr>
            //                 </tbody>
            //                 {/* <tbody>
            //                     <tr>
            //                         <td>4.Cam kết của người gửi<br />
            //                             Người gửi chấp nhận các điều khoản của bưu điện<br />
            //                             <label className="checkbox-inline"><input type="checkbox" defaultValue />Tôi đồng ý</label>

            //                         </td>
            //                     </tr>
            //                 </tbody> */}
            //             </table>
            //         </div>

            //         <div>
            //             <button type="submit" className="btn btn-guihang">OK</button>
            //         </div>

            //     </div>
            //     </form>
               
            //     <Footer />
            // </DefaultLayout>
            <DefaultLayout>
        <form>
        <div className="container guihang">
                   <div className="row shipping-header">
                         <div className="col-md-4"></div>
                        <div className="col-md-4">
                             <h1>ĐƠN VẬN</h1>
                         </div>
                         <div className="col-md-4">
                             Mã bưu cục:<input className="mabuucuc" name="mabuucuc"/><br />
                             Ngày gửi:<input className="ngaygui" name="ngaygui"/><br />
                             Mã đơn hàng:<input className="madonhang" name="madonhang" />
                         </div>

                     </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Email</label>
                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                </div>
                <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Password</label>
                <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="inputAddress">Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div className="form-group">
                <label htmlFor="inputAddress2">Address 2</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                <label htmlFor="inputCity">City</label>
                <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="form-group col-md-4">
                <label htmlFor="inputState">State</label>
                <select id="inputState" className="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
                </div>
                <div className="form-group col-md-2">
                <label htmlFor="inputZip">Zip</label>
                <input type="text" className="form-control" id="inputZip" />
                </div>
            </div>
            <div className="form-group">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck" />
                <label className="form-check-label" htmlFor="gridCheck">
                    Check me out
                </label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
</form>

            </DefaultLayout>

        );
    }
}

export default Transport;