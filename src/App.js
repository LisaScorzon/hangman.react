import React, { Component } from 'react';
import './App.css';
import initialState from './initialState'
import Gameline from './containers/Gameline'
import Boxes from './components/Boxes'
import sidebar from './reducers/sidebar'
import game from './lib/game'
import logo from './hangmanImage.png'
import store from './store'
import Alphabet from './components/Alphabet'




class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title">Welcome to ReactMan</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
          To get started guess a letter! You have 6 chances!
        </p>

          <store/>
          <Boxes/>
          <Alphabet/>
      </div>
    );
  }
}

export default App;
