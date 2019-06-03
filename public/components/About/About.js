import React, { Component } from 'react';
import Layout from '../Layout';
import Content from '../Content/Content';
import FeaturesSection from '../FeaturesSection/FeaturesSection';
import PortfolioSection from '../PortfolioSection/PortfolioSection';

class GioiThieu extends Component {
    render() {
        return (
           <Layout>
                <div className=" container mt-5">
                     <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/">Trang chủ</a>
                        </li>
                        <li className="breadcrumb-item active">Giới thiệu</li>
                    </ol>
                    {/* Intro Content */}
                    <div className="row">
                        <div className="col-lg-6">
                            <img className="img-fluid rounded mb-4" src="http://placehold.it/750x450" alt="ảnh" />
                        </div>
                        <div className="col-lg-6">
                            <h2>About Modern Business</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni, aperiam vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem corporis eveniet. Odit, temporibus reprehenderit dolorum!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis?</p>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <Content></Content>
                        <PortfolioSection></PortfolioSection>
                        <FeaturesSection></FeaturesSection>
                    </div>
   
                <h2>Our Customers</h2>
                <div className="row">
                    <div className="col-lg-2 col-sm-4 mb-4">
                        <img className="img-fluid" src="http://placehold.it/500x300" alt="ảnh" />
                    </div>
                    <div className="col-lg-2 col-sm-4 mb-4">
                        <img className="img-fluid" src="http://placehold.it/500x300" alt="ảnh" />
                    </div>
                    <div className="col-lg-2 col-sm-4 mb-4">
                        <img className="img-fluid" src="http://placehold.it/500x300" alt="ảnh" />
                    </div>
                    <div className="col-lg-2 col-sm-4 mb-4">
                        <img className="img-fluid" src="http://placehold.it/500x300" alt="ảnh" />
                    </div>
                    <div className="col-lg-2 col-sm-4 mb-4">
                        <img className="img-fluid" src="http://placehold.it/500x300" alt="ảnh" />
                    </div>
                    <div className="col-lg-2 col-sm-4 mb-4">
                        <img className="img-fluid" src="http://placehold.it/500x300" alt="ảnh" />
                    </div>
                </div>
                {/* /.row */}
            </div>
           </Layout>
        );
    }
}

export default GioiThieu;