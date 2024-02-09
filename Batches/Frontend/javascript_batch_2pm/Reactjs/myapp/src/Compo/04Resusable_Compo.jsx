import React, { Component } from 'react';

class Resusable_Compo extends Component {
    render() {
        return (
           <>
                <div className="main">
                    <img src={this.props.imgSrc} alt="" />
                    <h3>{this.props.ProductName}</h3>
                    <h4><del>Old Price:${this.props.OldPrice}</del></h4>
                    <h4>New Price:${this.props.NewPrice}</h4>
                    <button>Buy Now</button>
                    <br /><br />
                </div>
           </>
        );
    }
}

export default Resusable_Compo;