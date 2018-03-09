import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: [],
    }
  }

handleInputChange = (e) => {
  this.setState ({
    inputValue: e.target.value
  })
}

handleButtonClick = () => {
  const list = this.state.list;
  list.push(this.state.inputValue);
  this.setState({list: list, inputValue: ''})
}

  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <input value = {this.state.inputValue} onChange = {this.handleInputChange} type= 'text'></input>
        <button onClick={this.handleButtonClick}>submit</button>
        {this.state.list.map((item, index) =>{
          return <div className= 'list-item'>
          <p key={index}>{item}</p>
          </div>;
        })}
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
