import React, { Component } from 'react';
import {Prompt, BrowserRouter as Router} from 'react-router-dom';
import Layout from '../Layout';
class LienHe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isBlocking:false,
            txtTen:null,
            txtSdt:null,
            txtMail:null,
            txtGopY:null
        };
    }
    submit = (event) => {
        event.preventDefault()
        event.target.reset()
        this.setState({
        isBlocking: false
        });
        
    }
    inputChange = (event) => {
       
        this.setState({ isBlocking: event.target.value.length > 0,});
        console.log(event.target.value ) 
    }
    render() {
        return (
            <div className="container mt-5">
            <Layout>
               
                    {/*<Router>
                        <Prompt
                            when={this.state.isBlocking}
                            message={location =>
                            `Are you sure you want to go to ${location.pathname}`
                            }
                        />
                        </Router>*/}
                    <h2 className="mt-4 mb-3">
                        <small></small>
                    </h2>
                    <ol className="breadcrumb mt-5">
                        <li className="breadcrumb-item">
                        <a href="index.html">Trang chủ</a>
                        </li>
                        <li className="breadcrumb-item active">Liên hệ</li>
                    </ol>
                    <div className="row">
                        {/* Map Column */}
                        <div className="col-lg-8 mb-4">
                        {/* Embedded Google Map */}
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.194652703333!2d106.6643000142567!3d10.796398661778312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175292dd8bceffd%3A0xcb9d638e4019bd43!2zMjM2QiDEkMaw4budbmcgTMOqIFbEg24gU-G7uSwgUGjGsOG7nW5nIDEsIFTDom4gQsOsbmgsIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2sus!4v1555576347756!5m2!1sen!2sus" width="700" height="300" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} allowFullScreen title="myFrame"></iframe>
                        </div>
                        {/* Contact Details Column */}
                        <div className="col-lg-4 mb-4">
                            <h3>Chi tiết liên lạc</h3>
                            <span>
                            <i className="fa fa-hand-o-right" aria-hidden="true"> Trường ĐH Tài Nguyên và Môi Trường Tp.HCM</i>
                            <i className="fa fa-map-marker"  aria-hidden="true"> 236B, Lê Văn Sỹ, phường 1, quận Tân Bình, Tp.Hồ Chí Minh</i> 
                                
                            </span>
                            <p>
                                <abbr title="Phone"><i className="fa fa-phone" aria-hidden="true"></i></abbr> (123) 456-7890
                            </p>
                            <p>
                                <abbr title="Email"><i className="fa fa-envelope" aria-hidden="true"></i> </abbr>
                                <a href="mailto:huynhmai305@gmail.com">huynhmai305@gmail.com 
                                </a>
                            </p>
                            <p>
                                <abbr title="Hours"><i className="fa fa-clock-o" aria-hidden="true"></i></abbr> 
                                Thứ 2 - Thứ 6: 9:00 AM đến 6:00 PM 
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 mb-4">
                            <h3>Gửi góp ý</h3>
                            <form name="sentMessage" id="contactForm" noValidate onSubmit={(event) => this.submit(event)}>
                                <div className="control-group form-group">
                                    <div className="controls">
                                        <label>Họ tên:</label>
                                        <input type="text" className="form-control" id="name" name=" txtTen" required data-validation-required-message="Please enter your name." 
                                            onChange={(event) => this.inputChange(event)}
                                        />
                                        <p className="help-block" />
                                    </div>
                                </div>
                                <div className="control-group form-group">
                                    <div className="controls">
                                        <label>Số điện thoại:</label>
                                        <input type="tel" className="form-control" id="phone" required data-validation-required-message="Please enter your phone number."
                                            onChange={(event) => this.inputChange(event)}
                                        />
                                    </div>
                                </div>
                                <div className="control-group form-group">
                                    <div className="controls">
                                        <label>Địa chỉ mail:</label>
                                        <input type="email" className="form-control" id="email" required data-validation-required-message="Please enter your email address."
                                            onChange={(event) => this.inputChange(event)}
                                        />
                                    </div>
                                </div>
                                <div className="control-group form-group">
                                    <div className="controls">
                                        <label>Góp ý:</label>
                                        <textarea rows={10} cols={100} className="form-control" id="message" required data-validation-required-message="Please enter your message" maxLength={999} style={{resize: 'none'}} defaultValue={""} 
                                            onChange={(event) => this.inputChange(event)}
                                        />
                                    </div>
                                </div>
                                <div id="success" />
                                {/* For success/fail messages */}
                                    <button type="submit" className="btn btn-primary" id="sendMessageButton">Gửi góp ý</button>
                            </form>
                        </div>
                    </div>
                    {/* /.row */}
               

           </Layout>
           </div>
        );
    }
}

export default LienHe;