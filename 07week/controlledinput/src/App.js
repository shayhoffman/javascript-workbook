import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
console.log()

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  }

handleInputChange = (e) => {
  this.setState ({
    inputValue: e.target.value
  })
}

  render() {
    return (
      <div className="App">
        <input onChange = {this.handleInputChange} type= 'text'></input>
        <button>submit</button>
      </div>
    );
  }
}

export default App;
