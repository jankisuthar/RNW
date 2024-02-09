import React, { Component } from 'react';

class State extends Component {
    constructor()
    {
        super()
        console.log("This is contructor");
        this.state={name:"John",age:25}
    }
    Btnclck=()=>{
        console.log("Btn clicked");
        this.setState({name:"Angella",age:24})
    }

        
    render() {
        
        return (
            <div>
                <h1>Name : {this.state.name}</h1>
                <h1>Age : {this.state.age}</h1>
                <button onClick={this.Btnclck}>Click </button>
            </div>
        );
    }
}

export default State;