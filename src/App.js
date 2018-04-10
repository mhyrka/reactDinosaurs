import React, { Component } from 'react';

import './App.css';

import Header from './components/Header'
import AddJob from './components/AddJob'
import Footer from './components/Footer'
import Joblist from './components/Joblist'

class App extends Component {

  constructor() {
    super()
    this.state = {
      listings: []
    }
  }

  componentDidMount() {
    fetch('./listings.json')
    .then(response => response.json())
    .then(response => {
      this.setState({listings: response})
    })

  }


  jobListingSubmitted = (job) => {
    this.setState({
      listings: this.state.listings.concat(job).reverse()
    })

  }


  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Joblist listings={this.state.listings} />
          <AddJob jobListingSubmitted={this.jobListingSubmitted} />
        </main>
        <Footer />
      </div>
    );
  }
}


export default App;
