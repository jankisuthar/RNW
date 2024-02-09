import React, { Component } from 'react';


class LifeCycle extends Component {
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
        console.log("nextState: ",nextState);
        return true;
    }

    // componentWillUpdate(nextProps, nextState) {
    //     console.log("componentWillUpdate called");
    // }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate called");
        console.log("prevState: ",prevState);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount called");
    }
    Btnclck=()=>{
        console.log("btn called");
        this.setState({counter:this.state.counter+1})
    }
    render() {
        console.log("render called");
        return (
            <div className='container mt-5'>
                <h1>{this.state.counter}</h1>
                <button className='btn btn-primary' onClick={this.Btnclck}>Increment</button>
            </div>
        );
    }
}



export default LifeCycle;