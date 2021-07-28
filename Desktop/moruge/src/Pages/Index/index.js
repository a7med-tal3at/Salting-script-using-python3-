// Core
import React, { Component } from 'react';

// Components
import Home from './../../Components/Home';
import Blog from './../../Components/Blog';
import About from './../../Components/About';
import OurTech from './../../Components/OurTech';
import Partner from './../../Components/Partner';
import Services from './../../Components/Services';
import Search from './../../Components/Search';
import Features from './../../Components/Features';

// Reandering
class Index extends Component {
  componentDidMount() {
    if (localStorage.getItem('stell')) {
      localStorage.removeItem('stell');
      window.location.reload();
    }
  }
  render() {
    return (
        <div>
          <Home />
          <Search class="index" />
          <About />
          <Services />
          <Partner />
          <OurTech />
          <Features />
          <Blog />
        </div>
    );
  }
}

export default Index;
