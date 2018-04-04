import React from 'react'

class Joblist extends React.Component {
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
      let listings = response.map(listing => {
        return (
          <li key={listing.title}>
            <h4>{listing.title}</h4>
            <small>{listing.pay}</small>
            <p>{listing.description}</p>
            <small>{listing.interested.length} dinosaur(s) are interested in this position</small>
          </li>
        )
      })
      this.setState({listings: listings})
    })

  }

  render() {
       return (
       <section>
           <h2>Job Listings</h2>
           <ul id="job-listings">
             {this.state.listings}
           </ul>
       </section>
       )
     }
}



export default Joblist
