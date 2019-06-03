import React, { Component } from 'react';
import Link  from 'next/link';
class ItemProduct extends Component {
    to_slug = (str) => {
        // Chuyển hết sang chữ thường
        str = String(str).toLowerCase();     
    
        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');
    
        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');
    
        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');
    
        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');
    
        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');
    
        // return
        return str;
    }
    render() {
        return (
            <div className="">
                
                <div className="card">
                    <a href="/">
                        <img className="img-fluid rounded mb-3 mb-md-0" src={this.props.src} alt={this.props.children} />
                    </a>
                    <div className="card-body">
                        <h3>{this.props.children}</h3>
                        <p>{this.props.describe}</p>
                        <Link href={"chi-tiet/" + this.props.id +"/"+this.to_slug(this.props.children)+".html"}><a  className="btn btn-primary">Chi tiết
                            <span className="glyphicon glyphicon-chevron-right" />
                        </a></Link>
                    </div>
                    
                </div>
            </div>
           
        );
    }
}

export default ItemProduct;