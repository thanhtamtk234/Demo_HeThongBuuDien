var React = require('react');

import Css from '../layouts/Css';
import Footer from '../layouts/Footer';
import EmployeesLayout from './EmployeesLayout';

export default class Transport_customer extends React.Component {
    render() {
        return (
          <EmployeesLayout>
            <Css/>
            <div className="">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/admin">Trang chủ</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="/admin/user">Quản lí đơn vận</a>
                </li>

              </ol>
            </div>
            <div className="content">

              <form action="">
                <input className="search" type="text" placeholder="Search.." name="search" />
                <button type="submit"><i className="fa fa-search" /></button>
              </form>
              <table className="table ">
                <thead>
                <tr>
                  <th>Mã đơn hàng</th>
                  <th>Họ tên người gửi</th>
                  <th>Số điện thoại</th>
                  <th >Địa chỉ người gửi</th>
                  <th>Họ tên người nhận</th>
                  <th>Số điện thoại</th>
                  <th>Địa chỉ người nhận</th>
                  <th className="action"></th>

                </tr>
                </thead>
                <tbody>
                {this.props.result.map((item, key) =>
                  <tr key={key}>
                    <td
                      scope="row">{item.id_transport}

                    </td>
                    <td>
                      {item.Name_Sender}
                    </td>
                    <td>
                      {item.Phone_Sender}
                    </td>
                    <td>
                      {item.Adress_Sender}

                    </td>
                    <td>
                      {item.Name_Receiver}
                    </td>
                    <td>
                      {item.Adress_Receiver}
                    </td>
                    <td>
                      {item.Phone_Receiver}
                    </td>
                    <td>
                      <a href={"/quanlidonvan/" + item.id_transport + "/edit"}  className="btn btn-primary a-btn-slide-text-sua">
                        <span className="glyphicon glyphicon-edit" aria-hidden="true" />
                        <span><strong>Sửa</strong></span>
                      </a>

                      <a href={"/quanlidonvan/delete/" + item.id_transport} className="btn btn-primary a-btn-slide-text-xoa" >
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
          </EmployeesLayout>
        );
    }
}