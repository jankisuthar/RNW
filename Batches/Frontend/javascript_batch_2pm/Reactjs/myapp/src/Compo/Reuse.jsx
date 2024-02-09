import React, { Component } from 'react';

class Reuse extends Component {
    render() {
        return (
           <>
                <div className="main">
                <img src={this.props.imgSrc} alt="" />
                    <h3>{this.props.PName}</h3>
                    <h4><del>Old Price:${this.props.OldPrice}</del></h4>
                    <h4>New Price:${this.props.NewPrice}</h4>
                    <button>Buy Now</button>
                </div>
           </>
        );
    }
}

export default Reuse;