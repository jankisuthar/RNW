import React, { Component } from 'react';
import NewCompo from './HOC';

class Student1 extends Component {
    state = {
        name : "Tony"
    }
    render() {
        return (
            <div>
                <h1>Student 1</h1>
                <p>My Name is {this.state.name}</p>
                <p>My Age is {this.props.age}</p>
            </div>
        );
    }
}

export default NewCompo(Student1);