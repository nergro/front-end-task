import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Wireframe from './components/Wireframe/Wireframe';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

class App extends Component {
  state = {
    posts: [],
    loading: false,
    error: false
  };
  getFourRandomNumbers() {
    let arr = [];
    for (let i = 0; i < 4; i++) {
      arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
  }
  componentDidMount() {
    this.setState({
      loading: true
    });
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        let numbers = this.getFourRandomNumbers();
        let posts = numbers.map(number => {
          return res.data[number];
        });
        this.setState({
          posts: posts,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          error: true,
          loading: false
        });
      });
  }
  render() {
    console.log(this.state.loading);
    return (
      <div className='App'>
        <Header />
        <Welcome />
        <Wireframe
          posts={this.state.posts}
          loading={this.state.loading}
          error={this.state.error}
        />
        <Contacts />
        <Footer />
      </div>
    );
  }
}

export default App;
