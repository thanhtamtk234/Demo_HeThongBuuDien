import React, { Component } from 'react';
// import PaymentCard from 'react-payment-card-component';
class Item extends Component {
    constructor(props) {
        super(props);
        this.state={
            flipped:false
        }
    }
    
    flipCard = () => {
        if(this.state.flipped===false)
        {
            this.setState({ flipped :true});
        }
        else {
            this.setState({ flipped :false});
        }
        
      }
    render() {
        return (
           <div className="container">
                {/* Page Heading/Breadcrumbs */}
            
                   
                {/* Project One 
                <div className="row">
                    <div className="col-md-7">
                        <PaymentCard
                            bank="santander"
                            model="personnalite"
                            type="gold"
                            // brand="mastercard"
                            number="4111111111111111"
                            cvv="202"
                            holderName="H&M Loyalty Card"
                            expiration="12/20"
                            flipped={this.state.flipped}
                        />
                        <div className="service">
                            <input type="button" className="btn btn-info" value="Lật mặt" onClick={this.flipCard.bind()}/>
                        </div>
                        
                        
                    </div>
                    <div className="col-md-5">
                        <h3>{this.props.children}</h3>
                        <p>{this.props.describe}</p>
                        <a className="btn btn-primary" href="/">Xem thêm
                            <span className="glyphicon glyphicon-chevron-right" />
                        </a>
                    </div>
                </div>
                <hr />*/}
                <p>Chào bạn đến với trang giới thiệu các loại thẻ</p>
               
            </div>

        );
    }
    
}

export default Item;