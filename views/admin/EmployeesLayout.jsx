import React, { Component } from 'react';
import Css from '../layouts/Css';

export default class EmployeesLayout extends Component {
    render() {
        return (
            <div>
          <Css/>
    
          <div>
                <nav className="main-nav" id="main-nav">
                  <a href="/nhanvien">Trang chủ</a>
                  <a href="/quanlidonvan">Quản lí đơn vận</a>
                  
                </nav>
                <div className="page-wrap">
                      <header className="main-header">
                          <a href="#main-nav" className="open-menu">
                            ☰
                          </a>
                          <a href="#" className=  "close-menu">
                            ☰
                          </a>
                          <h1>Nhân viên</h1>
                      </header>
                      <div className="content">
                      
                      {this.props.children}
                      </div>
                </div>
          </div>
         
      </div>
        );
    }
}
