import React, { Component } from 'react';
import Link from 'next/link';
class DangNhap extends Component {
    render() {
        return (
            <div className="container-fluid login">
                
               <div className="row">
                   <div className="col-xs-12">
                        <form className="form-container">
                          
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email</label>
                                <input type="email" className="form-control is-valid" id="exampleInputEmail1" placeholder="Email" required/>
                                <div className="invalid-feedback">
                                    Không tìm thấy tài khoản
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control is-valid" id="exampleInputPassword1" placeholder="Password" required/>
                                <div className="invalid-feedback">
                                    Không tìm thấy tài khoản
                                </div>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" /> Remember me
                                </label>
                            </div>
                            <button type="submit" className="btn btn-success btn-block">Đăng nhập</button>
                            <p className="text-center">OR</p>
                            <Link href="/formdangky"><a className="btn btn-danger btn-block">Đăng ký</a></Link>
                        </form>
                   </div>
               </div>
            </div>
            
        );
    }
}

export default DangNhap;