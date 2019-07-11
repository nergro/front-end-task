import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Wireframe from './components/Wireframe/Wireframe';
import Contacts from './components/Contacts/Contacts';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Welcome />
        <Wireframe />
        <Contacts />
      </div>
    );
  }
}

export default App;
