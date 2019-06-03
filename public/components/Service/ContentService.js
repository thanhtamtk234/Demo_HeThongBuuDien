import React, { Component } from 'react';
import SanPham from '../SanPham/SanPham';

class ContentService extends Component {
    render() {
        return (
            <div className="container mt-5">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="/">Trang chủ</a>
                    </li>
                    <li className="breadcrumb-item active">Chương trình đổi quà</li>
                </ol>
               <div>
                    <SanPham></SanPham>
               </div>

            </div>
        );
    }
}

export default ContentService;