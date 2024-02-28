import React, { Component } from 'react';
import NewCompo from './HOC';

class Student2 extends Component {
    state = {
        name : "Tony"
    }
    render() {
        return (
            <div>
                <h1>Student 2</h1>
                <p>My Name is {this.state.name}</p>
                <p>My age is {this.props.age1}</p>
            </div>
        );
    }
}

export default NewCompo(Student2);