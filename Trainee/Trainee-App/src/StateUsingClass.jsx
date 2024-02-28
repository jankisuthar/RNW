import React, { Component } from 'react';

class StateUsingClass extends Component {
    constructor(){
        super()
        this.state = {
            name : "Tony Stark",
            comapany : "Stark industries"
        }
    }
    
    show = () => {
        this.setState ({
           name : "Captain america",
           comapany : "shield"
        } )
   }
      
    render() {
        return (
            <div>
                <h2>State Using Class Component</h2>
                <p>My name is {this.state.name} and My Company name is {this.state.comapany}</p>
                <button onClick={this.show}>onClick</button>
            </div>
        );
    }
}

export default StateUsingClass;