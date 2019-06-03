import React, { Component } from 'react';
import data from './ItemProduct.json';
class Detail extends Component {
    render() {
        const pid = parseInt(this.props.match.params.id,10);
        return (
           <div className="service container">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="/">Trang chủ</a>
                    </li>
                    <li className="breadcrumb-item active">Chi tiết sản phẩm</li>
                </ol>
               {
                
                data.map((item,key)=>{
                    if(item.id===pid){
                        return <div className="row " key={key}>
                                    <div className="col-lg-6">
                                        <h2>{item.name}</h2>
                                        <p>The Modern Business template by Start Bootstrap includes:</p>
                                        <ul>
                                            <li><strong>Bootstrap v4</strong></li>
                                            <li>jQuery</li>
                                            <li>Font Awesome</li>
                                            <li>Working contact form with validation</li>
                                            <li>Unstyled page elements for easy customization</li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <img className="img-fluid rounded" src={item.src} alt="ảnh" />
                                    </div>
                                </div>
                    }
                    return null;
                })
               }
                
                
           </div>
        );
    }
}

export default Detail;