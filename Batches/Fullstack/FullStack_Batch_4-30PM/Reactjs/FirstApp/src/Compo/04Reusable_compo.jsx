import React, { Component } from 'react';

class Reusable extends Component {
    render() {
        return (
            <> 
                <div className="card">
                    <img className='card-img-top' src={this.props.imgSrc}/>
                    <div className="card-body">
                        <h3 className='card-title text-primary'>{this.props.title}</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quia accusamus inventore dolorum facere quaerat. </p>
                        <span>Old Price:$ <del>${this.props.oldPrice}</del></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>New Price: $4000</span>
                        <button className='btn btn-primary mt-3'>Buy Now</button>
                    </div>
                </div>
            </>
        );
    }
}

export default Reusable;