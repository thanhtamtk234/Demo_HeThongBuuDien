var React = require('react');
import Css from './Css';

export default class DefaultLayout extends React.Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }
    render() {
        return (
            <div className="wrapper">
                <Css />
                <div className="pre-header">
                    <div className="container">
                        <div className="logo-wrapper col-sm-7 col-xs-12 col-left">
                            <a href="/" id="home" className="site-logo">
                                <img src="../images/logo.jpg" />
                            </a>
                        </div>
                    </div>
                    <div className="row main-menu-wrapper ">
                        <div className="col-sm-12">
                            <div className="container main-menu">
                                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNav">
                                        <ul className="navbar-nav">
                                            <li className="nav-item">
                                                <a href="/" className="nav-link ">Trang chủ</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/" className="nav-link ">Giới thiệu</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/" className="nav-link ">Liên hệ</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/guihang" className="nav-link  ">Gửi hàng</a>
                                            </li>
                                        </ul>
                                        <ul className="navbar-nav navbar-right">
                                            <li className="nav-item"><a href="/login" className="nav-link ">Đăng nhập</a></li>
                                        </ul>

                                    </div>

                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                {this.props.children}
            </div>

            //     </body>
            // </html>
        );
    }
}
