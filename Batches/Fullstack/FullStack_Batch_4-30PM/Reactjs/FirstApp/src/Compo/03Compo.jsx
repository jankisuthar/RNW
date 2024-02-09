import React, { Component } from 'react';
import Reusable from './04Reusable_compo'

class Compo extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-3">
                            <Reusable imgSrc="img/one.jpg" title="Nike Shoes" oldPrice="5000"/>
                        </div>
                        <div className="col-3">
                            <Reusable imgSrc="img/two.jpg" title="Puma Shoes" oldPrice="4500"/>
                        </div>
                        <div className="col-3">
                            <Reusable imgSrc="img/three.jpg" title="Sparx Shoes" oldPrice="3000"/>
                        </div>
                        <div className="col-3">
                            <Reusable imgSrc="img/four.jpg" title="Adidas Shoes" oldPrice="3500"/>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Compo;