var React = require('react');

import Css from '../layouts/Css';
import AdminLayout from './AdminLayout';
import Footer from '../layouts/Footer';


class Users extends React.Component {
    render() {
        return (

            <AdminLayout>
                <Css />
                <div className="">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/admin">Trang chủ</a>
                        </li>
                        <li className="breadcrumb-item">
                            <a href="/admin/user">Quản lí nhân viên</a>
                        </li>

                    </ol>
                </div>
                <div className="content">

                    <div>
                        <a href="/them" class="btn btn-info btn-lg">
                            <span class="glyphicon glyphicon-plus"></span> Thêm
                        </a>
                    </div>
                    <table className="table ">
                        <thead>
                            <tr>
                                <th>Mã nhân viên</th>
                                <th>Mã bưu cục</th>
                                <th>Họ và tên</th>
                                <th className="diachi">Địa chỉ</th>
                                <th>Số điện thoại</th>
                                <th className="action"></th>

                            </tr>
                        </thead>
                        <tbody>
                            {this.props.result.map((item, key) =>
                                <tr key={key}>
                                    <td
                                        scope="row">{item.id}

                                    </td>
                                    <td>
                                        {item.MaBuuCuc}
                                    </td>
                                    <td>
                                        {item.username}
                                    </td>
                                    <td>
                                        {item.DiaChi}
                                    </td>
                                    <td>
                                        {item.Sdt}
                                    </td>
                                    <td>
                                        <a href="#" className="btn btn-primary a-btn-slide-text-sua">
                                            <span className="glyphicon glyphicon-edit" aria-hidden="true" />
                                            <span><strong>Sửa</strong></span>
                                        </a>
                                        {/* <a href="#" className="btn btn-primary a-btn-slide-text-xem">
                                        <span className="glyphicon glyphicon-eye-open" aria-hidden="true" />
                                        <span><strong>Xem</strong></span>            
                                    </a> */}
                                        <a href={"/admin/user/delete/" + item.id} className="btn btn-primary a-btn-slide-text-xoa" >
                                            <span className="glyphicon glyphicon-remove" aria-hidden="true" />
                                            <span><strong>Xóa</strong></span>
                                        </a>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <Footer />
            </AdminLayout>





        );
    }
}

module.exports = Users;