import React, { Component } from 'react';
import Reuse from './Reuse';

class HOC extends Component {
    render() {
        return (
          <>
            <div className="products">
                <Reuse imgSrc="src/Compo/img/black.jpg" PName="Black T-shirt" OldPrice="2000" NewPrice="1000"/>
                <Reuse imgSrc="src/Compo/img/polo.jpg" PName="Polo T-shirt" OldPrice="2000" NewPrice="1000"/>
                <Reuse imgSrc="src/Compo/img/fill-sleve.jpg" PName="Full-Slive T-shirt" OldPrice="2000" NewPrice="1000"/>
                <Reuse imgSrc="src/Compo/img/round-neck.jpg" PName="Round-Neck T-shirt" OldPrice="2000" NewPrice="1000"/>

              
            </div>
          </>
        );
    }
}

export default HOC;