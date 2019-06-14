import React, { Component } from 'react';
import DefaultLayout from '../layouts/default'

export default class Transport extends Component {
  render() {
    return (
      <DefaultLayout>
        <div className="col-md-12">
          <form action={"/quanlidonvan/" + this.props.transportData.id_transport + "/update"} method="POST">
            <div className="container guihang">
              <div className="row shipping-header">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                  <h1>ĐƠN VẬN</h1>
                </div>
                <div className="col-md-4">
                  Mã bưu cục:<input className="mabuucuc" name="mabuucuc" value={this.props.transportData.MaBuuCuc}/><br />
                  Ngày gửi:<input className="ngaygui" name="ngaygui"/><br />
                  Mã đơn hàng:<input className="madonhang" name="madonhang" value={this.props.transportData.id_transport} />
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Họ và tên người gửi</label>
                <input type="text" className="form-control" name="Name_Sender" value={this.props.transportData.Name_Sender} />
                <label htmlFor="inputEmail4">Địa chỉ</label>
                <input type="text" className="form-control" name="Adress_Sender" value={this.props.transportData.Adress_Sender} />
                <label htmlFor="inputEmail4">Số điện thoại</label>
                <input type="text" className="form-control" name="Phone_Sender" value={this.props.transportData.Phone_Sender} />

              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Họ tên người nhận</label>
                <input type="text" className="form-control" name="Name_Receiver" value={this.props.transportData.Name_Receiver}/>
                <label htmlFor="inputEmail4">Địa chỉ</label>
                <input type="text" className="form-control" name="Adress_Receiver" value={this.props.transportData.Adress_Receiver}/>
                <label htmlFor="inputEmail4">Số điện thoại</label>
                <input type="text" className="form-control" name="Phone_Receiver" value={this.props.transportData.Phone_Receiver}/>
              </div>
            </div>
            <input type="submit" className="btn btn-primary" value="Xác nhận" />
          </form>
        </div>
      </DefaultLayout>
    );
  }
}
