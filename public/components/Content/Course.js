import React, { Component } from 'react';

class Course extends Component {
    render() {
        return (
            <div className="col-lg-4 mb-4">
                <div className="card h-100">
                    <h4 className="card-header text-center" >{this.props.children}</h4>
                    <div className="card-body">
                        <p className="card-text">{this.props.text}</p>
                    </div>
                    <div className="card-footer">
                        <a href="/" className="btn btn-primary">Xem thêm <i className="fa fa-angle-double-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Course;