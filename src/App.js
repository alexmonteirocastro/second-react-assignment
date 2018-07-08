import React, { Component } from 'react';
import './App.css';
import Validation from './Components/Validation';
import Char from './Components/Char';
import './Components/Validation.css';
import './Components/Char.css';

class App extends Component {
  state = {
    inputLength: 0,
    text: []
  }
  
  inputChangeHandler = (event) => {
    this.setState({
      inputLength: event.target.value.length,
      text: event.target.value.split('')
    });
  }

  characterClickHandler = (event) => {
    const text = [ ...this.state.text ]

    text.splice(Number(event.currentTarget.id), 1);

    document.getElementById('inputText').value = text.join('');

    this.setState({text: text});
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.inputChangeHandler} id="inputText"/>
        <p>Input is {this.state.inputLength} characters long.</p>
        <Validation length={this.state.inputLength}/>
        <Char changed={this.state.text} clickat={this.characterClickHandler.bind(this)}/>
      </div>
    );
  }
}

export default App;
