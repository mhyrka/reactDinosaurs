import React, { Component } from 'react';

import './App.css';

import Header from './components/Header'
import AddJob from './components/AddJob'
import Footer from './components/Footer'
import Joblist from './components/Joblist'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Joblist />
          <AddJob />
        </main>
        
        <Footer />
      </div>
    );
  }
}


export default App;
