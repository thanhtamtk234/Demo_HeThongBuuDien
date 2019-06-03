import React, { Component } from 'react';
import Course from './Course';
import data from './content.json';

class Content extends Component {
   
    render() {

        return (
            <div className="content" >   
                <div className="row">
                    {
                       data.map((item, key) => {
                            return <Course key={key} text={item.text} >{item.header}</Course>
                        })
                    }
                </div>
                <style jsx>{`
                content:{
                   
                }
            `}</style>
            </div>
        
        );
    }
}

export default Content;
