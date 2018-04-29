import React, { Component } from 'react';
import Home from './routes/Home/components/Home/Home'
import './App.css';

class App extends Component {
  render() {
    // Return JSX code.
    return (
      <div className="App p-1">
        <Home />
      </div>
    );
  }
}

export default App;
