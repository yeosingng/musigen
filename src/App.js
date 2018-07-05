import React, { Component } from 'react';
import './App.css';

import MainArea from './components/MainArea';
import Sidebar from './components/Sidebar';

class App extends Component {
  render() {
    return (
      <div id="parent">
        <div id='header'>
            <div id='main_title'>MUSI<span id="zonespan">GEN</span></div>
            <div id='about'>ABOUT</div>
        </div>
        <div id='header_sep'></div>
        <div id='app_space'>
          <Sidebar />
          <MainArea />
        </div>
     </div>
    );
  }
}

export default App;
