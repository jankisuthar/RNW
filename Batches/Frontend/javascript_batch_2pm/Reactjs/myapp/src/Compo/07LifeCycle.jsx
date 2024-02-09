import React, { Component } from 'react';
 

export default class LifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log("constructor called");
        this.state={counter:0}

    }

    // componentWillMount() {
    //     console.log("componentWillMount called");
    // }

    componentDidMount() {
        console.log("componentDidMount called");
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log("componentWillReceiveProps called");
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate called");
        console.log("nextState",nextState);
        return true;
    }

    // componentWillUpdate(nextProps, nextState) {
    //     console.log("componentWillUpdate called");
    // }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate called");
        console.log("prevState",prevState);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount called");
    }

    Btnclck=()=>{
        console.log("Btn called");
        this.setState({counter:this.state.counter+1})
    }

    render() {
        console.log("render called");
        return (
            <div>
                    <h1>{this.state.counter}</h1>
                    <button onClick={this.Btnclck}>Increment</button>
            </div>
        );
    }
}


