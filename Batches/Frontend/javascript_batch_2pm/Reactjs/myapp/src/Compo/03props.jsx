import React, { Component } from 'react';
import Reusable from './04Resusable_Compo'

class Props extends Component {
    render() {
        return (
            <div className='products'>
                
                    <Reusable imgSrc="src/Compo/img/puma.jpg" ProductName="Puma Shoes" OldPrice="5000" NewPrice="4000"/>
                    <Reusable imgSrc="src/Compo/img/sneakers.jpg" ProductName="Sneakers Shoes" OldPrice="4000" NewPrice="3000"/>
                    <Reusable imgSrc="src/Compo/img/sparxs.jpg" ProductName="Sparx Shoes" OldPrice="8000" NewPrice="7000"/>
               
            </div>
        );
    }
}

export default Props;