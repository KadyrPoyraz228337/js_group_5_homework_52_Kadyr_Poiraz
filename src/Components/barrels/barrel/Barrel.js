import React, { Component } from 'react';

class Barrel extends Component{
    render() {
        return (
            <span className="barrelElement">
                {this.props.value}
            </span>
        )
    }
}

export default Barrel;