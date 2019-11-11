import React, { Component } from 'react';

class Barrel extends Component{
    render() {
        return (
            <div className="barrelElement">
                <span>
                    {this.props.value}
                </span>
            </div>
        )
    }
}

export default Barrel;