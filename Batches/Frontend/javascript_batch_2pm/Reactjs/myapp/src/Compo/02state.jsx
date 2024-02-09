import React, { Component } from 'react';

class State extends Component {
   
    Btnclck=()=>{
        this.setState({Moviename:"2 States",Author:"Chetan Patel"});
    }
    render() {
        return (
            <div>
                <h1>This is State</h1>
                <h2>Movie Name : {this.state.Moviename}</h2>
                <h2>Author name : {this.state.Author}</h2>
                <button onClick={this.Btnclck}>Click me to change the Movie name</button>
            </div>
        );
    }
}

export default State;