import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Camera from "./Components/Camera/Camera";
import Login from "./Components/Login/Login";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Traffic Violation Detection System </h1>
          <p className="subtitle"> Version 1.0.0</p>
          <Login/>
      </div>
    );
  }
}

export default App;
