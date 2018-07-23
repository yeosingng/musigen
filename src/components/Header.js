import React, { Component } from 'react';
import './stylesheets/Header.css';

class Header extends Component {
  render(){
    return (
      <div id='header'>
          <div id='main_title'>MUSI<span id="zonespan">GEN</span></div>
          <div id='about'>ABOUT</div>
      </div>
    );
  }
}

export default Header;
