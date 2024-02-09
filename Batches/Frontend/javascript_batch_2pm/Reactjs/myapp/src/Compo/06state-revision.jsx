import React, { Component } from 'react';

export default  class StateRevision extends Component {
    constructor()
    {
        super();
        this.state={name:"Deep",age:23}
    }
    BtnClck=()=>{
        console.log("btn called");
        this.setState({name:"Aniket",age:24})
    }
    render() {
        return (
            <div>
                <h1>Name : {this.state.name}</h1>
                <h1>Age : {this.state.age}</h1>
                <button onClick={this.BtnClck}>Click Me</button>
            </div>
        );
    }
}

