import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="content">
                <h1>Welcome</h1>
               
                <div className="row mt-5">
                    <div className="col">
                        <i className="fas fa-cogs fa-5x" id="tienloi"></i>
                        <h3>Tiện lợi</h3>
                    </div>
                <div className="col">
                    <i class="fas fa-donate fa-5x" aria-hidden="true" id="tietkiem"></i>
                        <h3>Tiết kiệm</h3>
                    </div>
                <div className="col">
                    <i className="fas fa-gift fa-5x" id="hapdan"></i>
                    <h3>Hấp dẫn</h3>
                </div>
                   
                </div>
               <div className="foot">
                    <h4>Giải pháp quản lý khách hàng thân thiết hiệu quả nhất</h4>
               </div>
            </div>
        );
    }
}

export default Header;