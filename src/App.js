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

}

export default App;