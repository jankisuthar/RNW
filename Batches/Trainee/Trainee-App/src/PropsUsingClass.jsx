import React, { Component } from 'react';

class PropsUsingClass extends Component {
    constructor(props){
        super(props);
        this.props = props;
    }
    render() {
        return (
            <div>
                <h2>Props Using Class Component</h2>
                <p>{this.props.age}</p>
            </div>
        );
    }
}

export default PropsUsingClass;