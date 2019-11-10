import React, { Component } from 'react';
import Barrels from "./Components/barrels/barrels";


class App extends Component {
    state = {
        isClicked: false,
        arrayValues: [],
    };

  render() {
    return (
        <div>
            <button onClick={this.createBarrelValues.bind(this)}>123</button>
        </div>
    );
  }
    createRandomNumber(...array) {
        const number = Math.floor(Math.random()*(36-5)-1)+5;

        return array[0] === number || array[1] === number || array[2] === number || array[3] === number || array[4] === number ? this.createRandomNumber(...array) : number;
    }

    createBarrelValues() {
        this.setState({
            isClicked: false,
            arrayValues: [],
        });
        for(let i = 0; i < 5; i++) {
            this.state.arrayValues.push(this.createRandomNumber(this.state.arrayValues));
        }
        this.state.arrayValues.sort((a,b)=>{
            return a - b;
        });
    }

}

export default App;