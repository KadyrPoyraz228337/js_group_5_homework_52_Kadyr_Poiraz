import React, { Component } from 'react';
import Barrel from "./barrel/Barrel";

class Barrels extends Component {
    state = {
        isClicked: false,
        arrayValues: [],
    };
    createRandomNumber(...array) {
        const number = Math.floor(Math.random()*(36-5)-1)+5;

        return array[0] === number || array[1] === number || array[2] === number || array[3] === number || array[4] === number ? this.createRandomNumber(...array) : number;
    }

    createBarrelValues() {
        this.setState({
            isClicked: true,
            arrayValues: [],
        });
        let arr = [];
        for(let i = 0; i < 5; i++) {
            arr.push(this.createRandomNumber(this.state.arrayValues));
        }
        arr.sort((a,b)=>{
            return a - b;
        });
        this.setState({arrayValues: [...arr]});

    }
    render() {
        return (
            <div>
                <button onClick={this.createBarrelValues.bind(this)}>123</button>
                {this.state.isClicked &&
                <div className="barrelsBLock">
                    {this.state.arrayValues.map(key => <Barrel value={key} />)}
                </div>}
            </div>
        )
    }

}

export default Barrels;
