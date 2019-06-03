import React,{Component} from 'react';

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="/">H&M Loyalty Card</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                               <a className="nav-link" active="active" href="/gioithieu" >Giới thiệu</a>
                            </li>
                          
                            <li className="nav-item">
                                <a className="nav-link" href="/chuongtrinhdoiqua" >Chương trình đổi quà</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/thetichdiemthuong">Thẻ tích điểm</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/lienhe">Liên hệ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/formdangnhap">Đăng nhập</a>
                            </li>
                            {/*<li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fa fa-align-justify" aria-hidden="true"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
                                    <Link className="dropdown-item" to="/dang-nhap"><i class="fa fa-sign-in" aria-hidden="true"> Đăng nhập</i></Link>
                                    <Link className="dropdown-item" to="/dang-ky"><i class="fa fa-sign-out" aria-hidden="true"> Đăng ký</i></Link>
                                </div>
                            </li>*/}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;