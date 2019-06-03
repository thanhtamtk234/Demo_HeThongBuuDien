import React, {Component} from 'react';

class Header extends Component {
  
    render() {
        return (
            <div id="demo" className="carousel slide" data-ride="carousel">
                  <ul className="carousel-indicators">
                        <li data-target="#demo" data-slide-to={0} className="active" />
                        <li data-target="#demo" data-slide-to={1} />
                        <li data-target="#demo" data-slide-to={2} />
                  </ul>
                  <div className="carousel-inner">
                      <div className="carousel-item custom_carousel_item active">
                          <img src="../images/Banner1.png" alt="Los Angeles" width="100%" height={500} />
                          <div className="carousel-caption">
                              <h3>Giải pháp vận chuyển toàn diện</h3>
                              <p>Kết nối với khách hàng mọi nơi, tiết kiệm chi phí,nâng cao hiệu quả công việc</p>
                              <p>
                                <a id="dnn_ctr862_View_uc_rptSlider_hplDetail_0" href="https://postmart.vn/">Xem chi tiết</a>
                              </p>
                          </div>   
                      </div>
                      <div className="carousel-item">
                          <img src="../images/Banner2.png" alt="Chicago" width="100%" height={500} />
                          <div className="carousel-caption">
                                <h3>Nhân viên nhiệt tình chu đáo</h3>
                                <p>Với phong cách phục vụ chuyên nghiệp, hiện đại,</p>
                                <p> đội ngũ nhân viên luôn nhiệt tình chu đáo, nhanh chóng,</p>
                                <p> chính xác,đáp ứng mọi nhu cầu của khách hàng trên toàn quốc</p>
                                <p>
                                  <a id="dnn_ctr862_View_uc_rptSlider_hplDetail_1" href="https://postmart.vn/">Xem chi tiết</a>
                                </p>
                          </div>   
                  </div>
                    <div className="carousel-item">
                          <img src="../images/Banner3.png" alt="New York" width="100%" height={500} />
                          <div className="carousel-caption">
                              <h3>Dịch vụ vận chuyển hàng nặng quốc tế</h3>
                              <p>Dễ dàng sử dụng.Nhanh chóng và tin cậy.Tiết kiệm chi phí.</p>
                                <p>Định vị chuyến hàng mọi lúc mọi nơi.</p>
                              <p>
                                <a id="dnn_ctr862_View_uc_rptSlider_hplDetail_2" href="https://postmart.vn/">Xem chi tiết</a>
                              </p>
                          </div>   
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon" />
                  </a>
                  <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon" />
                  </a>
          </div>
          
        );
    }
}

export default Header;