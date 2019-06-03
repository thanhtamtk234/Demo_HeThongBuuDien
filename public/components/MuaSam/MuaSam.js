import React, { Component } from 'react';
import SanPham from '../SanPham/SanPham';
import {Link} from 'react-router-dom';
class MuaSam extends Component {
    render() {
        return (
            <div className="container service">
           
                {/* Page Heading/Breadcrumbs */}
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/">Trang chủ</Link>
                    </li>
                    <li className="breadcrumb-item active">Mua sắm</li>
                </ol>
                <div className="">
                    <SanPham></SanPham>
                </div>       
                    <hr />
                    {/* Pagination */}
                    <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <a className="page-link" href="/" aria-label="Previous">
                        <span aria-hidden="true">«</span>
                        <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="/">1</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="/">2</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="/">3</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="/" aria-label="Next">
                            <span aria-hidden="true">»</span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default MuaSam;