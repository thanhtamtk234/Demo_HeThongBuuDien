import React, { Component } from 'react';
import myData from "./ItemProduct.json";
import ItemProduct from './ItemProduct.js';
class SanPham extends Component {

    render() {
        return (
            <div className="sanpham mt-5">
            {
                myData.map((item, key) => {
                    return <ItemProduct key={key} id={item.id} src={item.src} describe={item.describe}>{item.name} </ItemProduct>
                })
            }
            </div>
        );
    }
}

export default SanPham;