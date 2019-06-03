import React, { Component } from 'react';
import Css from '../layouts/Css';
import Footer from './../layouts/Footer';

class AdminLayout extends Component {
  render() {
    return (
      <div>
          <Css/>
    
          <div>
                <nav className="main-nav" id="main-nav">
                  
                  <a href="/">Trang chủ</a>
                 
                  <a href="/admin/user">Quản lí nhân viên</a>
                 
                  <a href="/test">Quản lí bưu cục</a>
                  <a href="/login">Đăng xuất</a>
                  
                </nav>
                <div className="page-wrap">
                      <header className="main-header fixed-top">
                          <a href="#main-nav" className="open-menu">
                            ☰
                          </a>
                          <a href="#" className=  "close-menu">
                            ☰
                          </a>
                          <h1>Hệ thống bưu điện</h1>
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

export default AdminLayout;
