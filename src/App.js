import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Wireframe from './components/Wireframe/Wireframe';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Welcome />
        <Wireframe />
      </div>
    );
  }
}

export default App;
