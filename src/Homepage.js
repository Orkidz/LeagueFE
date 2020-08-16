import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios' 
import Header from './components/pagedesign/header'
import Footer from './components/pagedesign/footer'


export class Homepage extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Footer></Footer>
      </div>
    )
  }
}

export default Homepage

 