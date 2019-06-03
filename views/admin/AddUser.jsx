import React, { Component } from 'react';
import Css from '../layouts/Css';
import AdminLayout from './AdminLayout';
import Footer from './../layouts/Footer';

class AddUser extends Component {
    render() {
        return (
            <AdminLayout>
                <Css />
                <form className="register" method="POST">
                    <h1 className="add">Thêm nhân viên</h1>
                    {/* <div className="row detail-user">
                        <legend>Chi tiết tài khoản
                    </legend>
                        <div className="col-md-6">
                            <div className="form-inline">
                                <span>Email *</span>
                                <input type="text" name="email" required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-inline">
                                <span>Mật khẩu *</span>
                                <input type="text" name="password" required />
                            </div>
                        </div>
                    </div> */}
                    <div className="row">
                        <legend>Thông tin cá nhân
                    </legend>
                        <div className="col-md-6">
                            <div className="form-inline">
                                <span>Họ và tên *</span>
                                <input type="text" name="hoten" required />
                            </div>

                            <div className="form-inline">
                                <span>Số điện thoại *
                                </span>
                                <input className="phone" type="text" maxLength={10} name="sdt" required />
                            </div>
                            <div className="form-inline">
                                <span className="optional">Địa chỉ *
                            </span>
                                <input type="text" name="diachi" required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            {/* <div className="form-inline">
                                <span>Giới Tính</span>
                                <div className="checkbox-sex">
                                    <input type="radio" name="gender" defaultValue="radio" />
                                    <label className="gender">Nam</label>
                                    <input type="radio" name="gender" defaultValue="radio" />
                                    <label className="gender">Nữ</label>
                                </div>
                            </div> */}
                            <div className="form-inline">
                                <span>Mật khẩu *</span>
                                <input type="text" name="password" required />
                            </div>
                            <div className="form-inline">
                                <span>Email *</span>
                                <input type="text" name="email" required />
                            </div>
                            <div className="form-inline">
                                <span>Mã bưu cục *</span>
                                <input type="text" name="mabuucuc" required />
                            </div>

                        </div>
                    </div>

                    <button className="button btn-add">Thêm</button>
                    <button className="button btn-return"><i className="fa fa-angle-double-left"></i><a href="/admin/user">Quay lại</a></button>
                </form>
                <Footer />
            </AdminLayout>
        );
    }
}

export default AddUser;