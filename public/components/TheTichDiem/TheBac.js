import React, { Component } from 'react';
import mydata from './TheTichDiem.json';
import Item from './Item.js';
class TheBac extends Component {
    render() {
        return (
            <div className="mt-5 container">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="/">Trang chủ</a>
                    </li>
                    <li className="breadcrumb-item active">Thẻ tích điểm</li>
                </ol>
                {
                    mydata.map( (item,key) => {
                        return <Item key={key} describe={item.describe}>{item.name}</Item>

                    })
                }
            </div>
        );
    }
}

export default TheBac;