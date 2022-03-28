import React, { Component } from "react";
import NavBar from '../components/js/NavBar';
import Banner from '../components/js/Banner';
import Statistics from '../components/js/Statistics';
import SalesPitch from '../components/js/SalesPitch';

import './Home.css';

class Home extends Component {
  render() {
    return (
      <>
        <main>
        <Banner />
        <NavBar />
        <SalesPitch />
        <Statistics />
        </main>
      </>
    )
  }  
}

export default Home;