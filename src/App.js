import React, { Component } from 'react';
import logo from './image/logo.jpg';
import './App.css';
import initialState from './initialState'
import './App.css';
import Gameline from './containers/Gameline'
import Boxes from './components/Boxes'
import sidebar from './reducer/sidebar'
import game from './lib/game'




class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="title">Welcome to ReactMan</h1>
        </header>
        <p className="App-intro">
          To get started guess a letter! You have 6 chances!
        </p>
        <text/>
        <sidebar/>
        <initialState/>


      </div>
    );
  }
}

export default App;
