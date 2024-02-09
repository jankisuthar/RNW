import React, { Component } from 'react';

class StateRevision extends Component {
    constructor(){
        super()
        this.state={Author:""}
    }
    Btnclck=()=>{
        this.setState({Author:"Chetan Bhagat"})
    }
    render() {
        return (
            <div>
                <h1>Movie : 3 idiots</h1>
                <h2>Author : {this.state.Author}</h2>
                <button onClick={this.Btnclck}>Click to show theb Author name</button>
            </div>
        );
    }
}

export default StateRevision;