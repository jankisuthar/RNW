import React, { Component } from 'react';

const NewCompo = (OriginalComp) => {
    class HOC extends Component {
        render() {
            return (
                <div>
                    <OriginalComp age="25" age1="20"/>
                </div>
            );
        }
    }
    return HOC;
    
}
export default NewCompo;