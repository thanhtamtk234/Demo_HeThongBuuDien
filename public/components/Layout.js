import React, { Component } from 'react';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';


class Layout extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}

export default Layout;